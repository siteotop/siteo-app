<template>
<v-card>
    <v-toolbar tabs dense>
      <v-toolbar-title>Gallery: {{idComponent}} </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn icon @click="added=true" >
            <v-icon>{{$options._icons.databasePlus}}</v-icon>
      </v-btn>
      <v-btn icon @click="closeMenu">
        <v-icon>$vuetify.icons.close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text  v-if="!added" >
      <v-list-item v-for="(template, index) in templates"  @click="setNewJsonStrucutre(index)" :key="index" >

        <v-list-item-content>
          <v-list-item-title>{{template.title}}</v-list-item-title>
          <v-list-item-subtitle>{{template.type}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action >

        </v-list-item-action>
      </v-list-item>

    </v-card-text >
    <v-card-text v-else >
      <v-text-field
         v-model="title"
         label="Title"
       ></v-text-field>
      <v-btn @click="saveJsonStrucutre">Save</v-btn>
    </v-card-text>

</v-card>
</template>
<script>

import storeTemplates from './templates';
import {
  mdiDatabasePlus,

} from '@mdi/js';
export default {

  props: {
     idComponent: {
       type:String,
       default: ''
     },

     jsonStructure: {
       type: Object
     },

     titleComponent: {
       type: String
     }
  },

  _icons: {
        databasePlus: mdiDatabasePlus,
  },

  data() {
    return {
      title: '',
      added: false,
      templates: []
    }
  },

  mounted() {
     this.title = this.titleComponent;
     this.registerModule();
     this.$store.commit('_gallery_templates/clearList');
     this.fetchItem();
  },



  methods: {
    closeMenu() {
      this.$emit('closeMenu');
    },
    fetchItem() {

        console.log(this.idComponent);
        this.$store.dispatch('_gallery_templates/getList', {idComponent:this.idComponent }).then((resultList)=>{
          this.templates = resultList;
        }) ;

    },
    registerModule() {
        this.$store.registerApiModule( {
          name: '_gallery_templates',
          module: storeTemplates,
          moduleOptions: {moduleItems: true}
        } );
    },

    saveJsonStrucutre() {

        var jsonStructure = {};
        jsonStructure[this.idComponent] = this.jsonStructure;
        this.$store.dispatch('_gallery_templates/createObjectInList', {
            title: this.title,
            jsonStructure: jsonStructure,
            type: this.idComponent
        }).then(response=>{
           this.added = false
        });
    },

    setNewJsonStrucutre(index) {
      console.log(this.templates[index].jsonStructure);
      var jsonStrucutre = JSON.parse( this.templates[index].jsonStructure);
      this.$emit('updateBlock', jsonStrucutre[this.idComponent]);
    }
  }






}
</script>
