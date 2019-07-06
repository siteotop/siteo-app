<template>
<v-card>
    <v-toolbar tabs dense>
      <v-toolbar-title>Gallery: </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-list-item v-for="(template, index) in templates"  @click="" :key="index" >

        <v-list-item-content>
          <v-list-item-title>{{template.title}}</v-list-item-title>
          <v-list-item-subtitle>{{template.type}}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action >

        </v-list-item-action>
      </v-list-item>
    </v-card-text>
</v-card>
</template>
<script>

import storeTemplates from './templates';

export default {

  props: {
     idComponent: {
       type:String,
       default: ''
     },

     jsonStructure: {
       type: Object
     }
  },

  data() {
    return {
      templates: []
    }
  },

  mounted() {
     this.registerModule();
     this.$store.commit('_gallery_templates/clearList');
     this.fetchItem();
  },



  methods: {

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
    }
  }






}
</script>
