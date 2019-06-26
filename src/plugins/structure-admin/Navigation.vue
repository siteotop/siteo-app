<template>
  <div>
    <v-navigation-drawer
      v-if="loadedi18n"
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
        >
        <v-icon>$vuetify.icons.prev</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-btn :disabled="!treeHistory.length"  icon @click="backHistory">
             Back
        </v-btn>
        <v-btn  icon  @click="showJsonDesign=true">
           View
         </v-btn>
        <v-btn  icon @click="saveDesign">
             Save
        </v-btn>
      </template>

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
                   <code>{{JSON.stringify(treeComponents, null, 1)}}</code>
                </v-flex>
                <v-flex>
                  <code>{{JSON.stringify(zippedDesign, null, 1)}}</code>
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
        <v-icon>{{$options._icons.settings}}</v-icon>
   </v-btn>
 </div>
</template>
<script>

import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import {zipObjectBeforeSave, unzipObjectBeforeUpate} from './validator/zipUnzip';
import SettingsChildren from './Blocks/Children.vue';
import {mdiSettings} from '@mdi/js';
export default {
  name:'BDesignTemplates',

  components: {
    SettingsChildren
  },

  props: {

    typeStructure: {
      type: String,
      default: 'RDe'
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

    // call eventChangeStructure when start
    loadWhenStart: {
      type: Boolean,
      default: false

    }



  },

  _icons: {
    settings: mdiSettings

  },

  data() {
    return {
      loadedi18n: false,
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

  beforeMount() {
    var  $lang = 'en';
    var self = this;
    import( /* webpackChunkName: "admin-[request]" */  './i18n/'+$lang+'/').then(function(module) {
        self.$i18n.mergeLocaleMessage($lang, module.default);
        console.log( self.$i18n.getLocaleMessage($lang));
        self.loadedi18n = true;
    }).catch((error)=>{
      console.log(error);
    })
  },

  beforeDestroy() {
      var  $lang = 'en';
      this.$i18n.mergeLocaleMessage($lang, {admin: undefined });
      console.log( this.$i18n.getLocaleMessage($lang));
  },

  watch: {

    loadWhenStart: function (newValue, oldValue) {
       if (newValue && newValue!== oldValue) {
            this.eventChangeStructure(this.zippedDesign);
       }
     },

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
      return this.typeStructure =='RDe';
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
