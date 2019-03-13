<template>
  <div>
    <v-navigation-drawer  :width="drawerWidth"  right
   app
   stateless

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
        > <AppIcon name="menu"></AppIcon>
      </v-btn>
    </v-toolbar>

    <v-subheader>
        Main Components
    </v-subheader>
    <v-expansion-panel>
      <DesignTabsBlock  :designStructure="arrayDesignStructure">
      </DesignTabsBlock>
    </v-expansion-panel>

    <v-subheader>
        Save
    </v-subheader>
    <v-card tile >
      <v-card-actions>
       <v-btn @click="saveDesign">
            Save
       </v-btn>
    </v-card-actions>
    </v-card>


   </v-navigation-drawer>
   <v-btn
          color="pink"
          v-show="!drawerSettings"
          @click="drawerSettings = !drawerSettings"
          dark
          fab
          fixed
          bottom
          right

        >
        <AppIcon name="menu"></AppIcon>
   </v-btn>
 </div>
</template>
<script>

//import ChunkLoader from '../../components/_mixins/loader-i18-chunk.js';
//import * as SettingsComponents from './Settings';

//import LoadModule from '../../components/_mixins/loader-store-module.js';


export default {

  //mixins: [ChunkLoader, LoadModule],

  name:'BDesignTemplates',

  //$_LoadModule_plain: templates,

  //components: SettingsComponents,

  data() {
    return {
      drawerSettings: false,

    }
  },

  created() {
    // add _id for website, because templates does not work without it
    this.$store.commit('websites/setApiId', this.$store.state.appInstance.objectActive._id);
    // add _id for  templates
  //  this.$store.commit('websites/templates/setApiId', this.$store.state.appInstance.objectActive.templates_id );
  },
  methods: {

      saveDesign() {
        // update template store
        this.$store.dispatch('websites/templates/updateObject', { designStructure: this.$store.state.appInstance.objectActive.design})
         //this.$emit('saveDesign', {} );
      },

      /*
      disconnectOptions(changedList) {
       var self = this;
       return changedList.map(function(component) {
           console.log(JSON.stringify(component));
           for (var  i in self.$options.listBlock ) {
             var nameBlcok = self.$options.listBlock[i];
             if (component[nameBlcok]) {
                if (
                     JSON.stringify(component[nameBlcok]) ==
                     JSON.stringify(self.basicComponents[component.name][nameBlcok])
                   ) {
                   delete   component[nameBlcok];
                }
             }

           }
           return component;
       })
     }*/


  },

  watch: {

    '$root.instanceDesign.theme': {
      handler () {
        this.$vuetify.theme = this.$root.instanceDesign.theme.colors;
      },
      deep: true
    }
  },

  computed: {

    arrayDesignStructure() {
      return Object.values(this.$store.state.appInstance.objectActive.design);
    },

    /**
      return  width for driver
       @return @type Number
    */
     drawerWidth() {

        if (this.$vuetify.breakpoint.smAndUp) {
          // if bigger than mobile return  this value
          return 350;
        } else {
           return null;
        }
     }
  }

}

</script>
