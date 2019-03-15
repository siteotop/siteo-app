<template>
  <div>
    <v-navigation-drawer
      left
      stateless
      app
      v-model="drawerSettings">

    <v-toolbar  flat dark >
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


   <v-dialog v-model="showJsonDesign" width="500" >
       <v-card>
         <v-card-text>
               <code>{{JSON.stringify(defaultDesign, null, 4)}}</code>

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

//import ChunkLoader from '../../components/_mixins/loader-i18-chunk.js';
//import * as SettingsComponents from './Settings';

//import LoadModule from '../../components/_mixins/loader-store-module.js';
import {designDefault} from './defaultDesign';

export default {

  //mixins: [ChunkLoader, LoadModule],

  name:'BDesignTemplates',



  data() {
    return {
      defaultDesign: designDefault(),
      drawerSettings: true,
      showJsonDesign: false

    }
  },

  methods: {

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
