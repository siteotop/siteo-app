<template>
<div>
 <v-toolbar flat>
   <v-btn   fab flat>
     <AppIcon name="si-filter"></AppIcon>
   </v-btn>
   <v-spacer></v-spacer>


   <v-btn-toggle mandatory v-model="toogle_component">
              <v-btn flat value="list">
                  <AppIcon name="si-services"></AppIcon>
              </v-btn>
              <v-btn flat value="cards">
                  <AppIcon name="si-view-cards"></AppIcon>
              </v-btn>
  </v-btn-toggle>

   <v-btn  small fab flat>
       <AppIcon name="si-sort"></AppIcon>
   </v-btn>
 </v-toolbar>

<component :is="'list-'+typeList" :toogleComponent="toogle_component">
  <v-layout slot="header"  wrap class="mb-4"> </v-layout>
</component>
</div>
</template>

<script>

import ListServices from '../PageSchema/Sections/Items/Services.js';
import ListPosts from '../PageSchema/Sections/Items/Posts.js';
import ListExperts from '../PageSchema/Sections/Items/Experts.js';

export default {
 components: {
   ListServices,
   ListPosts,
   ListExperts
 },
  props: {
    typeList: {
      type: String,
      default :''
    }
  },

  data() {
    return {
      toogle_component: 'cards'
    }
  },

  metaInfo () {

   return {
      title: this.meta_title,
      titleTemplate: '%s  - ' + this.$store.state.APP_INSTANCE.data.name,
      meta: [
        {name: 'description', vmid: 'description', content: this.meta_description }
      ]

    }
  },

}

</script>
