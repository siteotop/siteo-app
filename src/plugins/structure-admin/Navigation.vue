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
    <v-expansion-panel>
      <DesignTabsBlock  :designStructure="preparedDesign">
      </DesignTabsBlock>
    </v-expansion-panel>

    <v-subheader>
        Save
    </v-subheader>
    <v-card tile >
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
                   <code>{{JSON.stringify(defaultDesign, null, 4)}}</code>
                </v-flex>
                <v-flex>
                  <code>{{JSON.stringify(zipDesign(defaultDesign), null, 4)}}</code>
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


import {designDefault} from './designDefault';

import _cloneDeep from 'lodash/cloneDeep';
import {zipObjectBeforeSave} from './_helper/zipUnzip';

export default {


  name:'BDesignTemplates',

  props: {

    eventChangeStructure: {
      type: Function
    }

  },

  data() {
    return {
      defaultDesign: designDefault(),
      drawerSettings: true,
      showJsonDesign: false

    }
  },

  watch: {
    defaultDesign: {
        handler: function(newDesignStructure) {

           this.eventChangeStructure(this.zipDesign(newDesignStructure));

        },
        deep: true
      }
  },


  methods: {

    zipDesign(preparedDesign) {
       var structureForSaving =   _cloneDeep(preparedDesign);
       zipObjectBeforeSave(structureForSaving, true);
       return structureForSaving;
    },

    saveDesign() {


        // something for saving design
    }
  },


  computed: {


    preparedDesign() {
      return Object.values(this.defaultDesign);
    }

  }



}

</script>
