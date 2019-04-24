<template>
  <div>
    <v-navigation-drawer
      left
      stateless
      app
      v-model="drawerSettings">

    <v-toolbar>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn

          @click="drawerSettings = !drawerSettings"
          small
          icon
          color="indigo"
          class=" white--text"
        > <AppIcon name="si-arrow-left"></AppIcon>
      </v-btn>
      <v-btn :disabled="!this.treeHistory.length" slot="extension" icon @click="backHistory">
           Back
      </v-btn>
      <v-btn slot="extension" icon  @click="showJsonDesign=true">
         View
       </v-btn>
      <v-btn slot="extension" icon @click="saveDesign">
           Save
      </v-btn>
    </v-toolbar>

    <v-subheader>
        Main Components
    </v-subheader>
    <SettingsChildren :componentName="typeStructure"  :noDublicateChild="structureDesign"  v-model="treeComponents" :watchValue="true">
    </SettingsChildren>

    </v-card>


   </v-navigation-drawer>


   <v-dialog v-model="showJsonDesign" width="700" >
       <v-card>
         <v-card-text>
          <v-layout>
                <v-flex>
                   <code>{{JSON.stringify(treeComponents, null, 4)}}</code>
                </v-flex>
                <v-flex>
                  <code>{{JSON.stringify(zippedDesign, null, 4)}}</code>
                </v-flex>
            </v-layout>
          </v-card-text>
       </v-card>
   </v-dialog>
   <v-btn
          color="pink"
          v-show="!drawerSettings"
          @click="drawerSettings = !drawerSettings"
          dark
          fab
          fixed
          bottom
          left

        >
        <AppIcon name="si-settings"></AppIcon>
   </v-btn>
 </div>
</template>
<script>

import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import {zipObjectBeforeSave, unzipObjectBeforeUpate} from './validator/zipUnzip';
import SettingsChildren from './Blocks/Children.vue';

export default {
  name:'BDesignTemplates',

  components: {
    SettingsChildren
  },

  props: {

    typeStructure: {
      type: String,
      default: 'rootDesign'
    },

    mainStructure: {
      type: [Array, Object, String, Boolean],
      default: true
    },

    // what do if structure changing
    eventChangeStructure: {
      type: Function
    },

    // what do if structure changing
    eventSaveStructure: {
      type: Function
    },



  },

  data() {
    return {
      treeHistory: [],
      historyBlock: false,
      treeComponents: {},
      drawerSettings: true,
      showJsonDesign: false,
      isTreeWasObject: false,
    }
  },

  created() {



      this.createTreeStructure(this.mainStructure);



  },

  watch: {
    treeComponents: {
        handler: function(treeComponents, oldTree) {
          this.eventChangeStructure(this.zippedDesign);
        },
        deep: true
    },

    zippedDesign: function (newDesign, oldDesign){
        var old = JSON.stringify(oldDesign);
        if (JSON.stringify(newDesign) !=  old) {
          this.addToHistory(old);
          console.log('changed');
        } else {
          console.log('not changed');
        }

    }
  },


  methods: {

    createTreeStructure(mainStructure) {
      var structure;
      if (_isEmpty(mainStructure)) {
        if (this.structureDesign) {
          // if structure  we need create Object
            structure = {};
        } else {
          // if page we need create array
          structure = [];
        }

      } else {
        structure= unzipObjectBeforeUpate(
          _cloneDeep(JSON.parse(mainStructure)),
          this.structureDesign
        );

      }

      if (!Array.isArray(structure)) {
         this.isTreeWasObject = true;
         this.treeComponents=  Object.values(structure);
      } else {
        this.treeComponents = structure;
      }
    },

    addToHistory(oldTree) {
      if (this.historyBlock ) {
          this.historyBlock = false;
          return;
      }

      if (oldTree !='{}') {
        this.treeHistory.push(oldTree);
      }

      if (this.treeHistory.length>2) {
        this.treeHistory.shift();
      }


    },

    saveDesign() {
        this.treeHistory = [];
        this.eventSaveStructure(this.zippedDesign);
    },

    backHistory() {
      //console.log(JSON.parse(this.treeHistory));
       this.createTreeStructure(this.treeHistory.pop())
       this.historyBlock = true;
    }

  },


  computed: {

    structureDesign() {
      return this.typeStructure =='rootDesign';
    },

    zippedDesign() {

      if (this.isTreeWasObject) {
        var structureForSaving = {};
        for (var name in this.treeComponents) {
          structureForSaving[this.treeComponents[name]._n] = _cloneDeep(this.treeComponents[name]);
        }
      } else {
        var structureForSaving = _cloneDeep(this.treeComponents);
      }

      zipObjectBeforeSave(structureForSaving, this.structureDesign);
      return structureForSaving;

    }




  }



}

</script>
