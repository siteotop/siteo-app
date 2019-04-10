<template>
  <div>
    <v-navigation-drawer
      left
      stateless
      app
      v-model="drawerSettings">

    <v-toolbar  flat >
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          fab
          @click="drawerSettings = !drawerSettings"
          small
          color="indigo"
          class=" white--text"
        > <AppIcon name="si-arrow-left"></AppIcon>
      </v-btn>
    </v-toolbar>

    <v-subheader>
        Main Components
    </v-subheader>
    <SettingsChildren :componentName="typeStructure"  :noDublicateChild="structureDesign"  v-model="treeComponents">
    </SettingsChildren>
   <v-card tile flat  >
      <v-card-actions>
       <v-btn  @click="showJsonDesign=true">
          View
        </v-btn>
       <v-btn @click="saveDesign">
            Save
       </v-btn>
    </v-card-actions>


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
import {zipObjectBeforeSave, unzipObjectBeforeUpate} from './_helper/zipUnzip';
import SettingsChildren from './Blocks/Children.vue';
console.log(SettingsChildren);
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
      treeComponents: {},
      drawerSettings: true,
      showJsonDesign: false,
      isTreeWasObject: false,
    }
  },

  created() {

      var structure;
      if (_isEmpty(this.mainStructure)) {
        if (this.structureDesign) {
          // if structure  we need create Object
            structure = {};
        } else {
          // if page we need create array
          structure = [];
        }

      } else {
        structure= unzipObjectBeforeUpate(
          _cloneDeep(JSON.parse(this.mainStructure)),
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

  watch: {
    treeComponents: {
        handler: function(treeComponents) {

           this.eventChangeStructure(this.zippedDesign);
        },
        deep: true
      }
  },


  methods: {
    saveDesign() {
        this.eventSaveStructure(this.zippedDesign);
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
