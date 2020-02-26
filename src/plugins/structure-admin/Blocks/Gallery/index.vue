<template>
<v-card>
    <v-toolbar tabs dense>
      <v-toolbar-title>Gallery: {{idComponent}} </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn icon @click="openAddedMenu" >
            <v-icon>{{$options._icons.databasePlus}}</v-icon>
      </v-btn>
      <v-btn icon @click="closeMenu">
        <v-icon>$vuetify.icons.close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text  v-if="!added" >
      <v-list-item v-for="(template, index) in templates" @click="setNewJsonStrucutre(index)" :key="index" >

        <v-list-item-content>
          <v-list-item-title>{{template.title}}</v-list-item-title>
          <v-list-item-subtitle>{{template.type}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action >
            <v-btn  @click="updateJsonStrucutre($event, index)" icon>
              <v-icon>$vuetify.icons.edit</v-icon>
            </v-btn>
        </v-list-item-action>

      </v-list-item>

    </v-card-text >
    <v-card-text v-else >

      <v-text-field
         v-model="title"
         label="Title"
       ></v-text-field>
      <v-btn  @click="saveJsonStrucutre"><span v-if="isUpdate">Update</span><span v-else>Save</span> </v-btn>
      <v-btn @click="added=false">Cancel</v-btn>
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
      updateIndex: false,
      templates: []
    }
  },

  mounted() {

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

    openAddedMenu() {
      this.added =  true;
      if (this.isUpdate) {
         this.title = this.templates[this.updateIndex].title;
      } else {
        this.title = this.titleComponent;
      }
    },


    registerModule() {
        this.$store.registerApiModule( {
          name: '_gallery_templates',
          module: storeTemplates,
          moduleOptions: {moduleItems: true}
        } );
    },

    saveJsonStrucutre() {


        var dispatch;
        if (this.isUpdate) {
          dispatch = '_gallery_templates/updateObjectInList';
        } else {
            dispatch = '_gallery_templates/createObjectInList';
        }
        this.$store.dispatch(dispatch, this.generateData()).then(response=>{
           this.clearForm();
        });
    },

    /**
      generate data for saveJsonStrucutre
      it according to event SAVE/UPDATE
    */
    generateData() {
      var jsonStructure = {};
      jsonStructure[this.idComponent] = this.jsonStructure;
      if (this.isUpdate) {
        return {
          _id: this.templates[this.updateIndex]._id,
          title: this.title,
          jsonStructure: jsonStructure,
        }
      } else {
        return {
           title: this.title,
           jsonStructure: jsonStructure,
           type: this.idComponent
       }
      }

    },

    clearForm() {
      this.added = false
      this.updateIndex = false;
    },

    updateJsonStrucutre(event, index) {
         event.stopPropagation();
         this.updateIndex = index;
         this.openAddedMenu();

    },

    /**
      Emit new structure for parent component
    */
    setNewJsonStrucutre(index) {
      var jsonStrucutre = JSON.parse( this.templates[index].jsonStructure);
      this.$emit('updateBlock', jsonStrucutre[this.idComponent]);
    }
  },

  computed: {
      isUpdate() {
        return   this.updateIndex!==false;
      }

  }






}
</script>
