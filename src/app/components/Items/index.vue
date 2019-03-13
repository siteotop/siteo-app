<template>
<div>
  <PageItemsToolbar :hightUp="100">
    <v-btn   fab flat>
      <AppIcon name="si-filter"></AppIcon>
    </v-btn>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn-toggle mandatory v-model="toggle_component">
      <v-btn flat value="cards">
          <AppIcon name="si-view-cards"></AppIcon>
      </v-btn>
      <v-btn v-if="!$root.mobile" flat value="card">
         <AppIcon name="si-view-card"></AppIcon>
      </v-btn>
      <v-btn flat value="list">
         <AppIcon name="si-values"></AppIcon>
      </v-btn>
   </v-btn-toggle>
   <v-btn  small fab flat>
        <AppIcon name="si-sort"></AppIcon>
   </v-btn>
  </PageItemsToolbar>
  <component   :is="'wi-'+typeList" :items="$store.state[typeList].items.objects" :_t="title" $tl="justify-center text-xs-center pt-1 pb-4" :toggleComponent="toggle_component" :$vl="toggle_component=='list'">
    <v-layout slot="header"  wrap class="mb-4"> </v-layout>
  </component>
  <FunctionalButtonUp></FunctionalButtonUp>
</div>
</template>
<script>
import PageItemsToolbar from './Functional/PageItemsToolbar.vue';
import FunctionalButtonUp from  '../Pages/Functional/ButtonUp.vue';
import mixinsAsyncdata from '../_mixins/asyncData';

import WiValues from '../Widgets/WiValues.vue';
import WiExperts from '../Widgets/WiExperts.vue';
import WiPosts from '../Widgets/WiPosts.vue';

import * as StoreModules from  '../../store/modules';


export default {

  mixins: [mixinsAsyncdata],

  props: {
    typeList: {
      type: String,
      default :''
    }
  },
  components: {
    PageItemsToolbar,
    FunctionalButtonUp,
    WiValues,
    WiExperts,
    WiPosts
  },

  asyncData({store, route}) {
    console.log('loaded data items from server for route:');
    store.registerApiModule(route.name, StoreModules[route.name]('WEBSITE_API_URL'), true);

    if (store.state.allowAsyncLoad) {
       return store.dispatch(route.name+'/getList');
    }
  },

  destroyed () {
    console.log(this.typeList);
    this.$store.unregisterApiModule(this.typeList);
 },

  data() {
    return {
      toggle_component: 'cards'
    }
  },

  computed: {
      title() {
        return this.$t('routes_'+this.typeList+'_t');
      },


  },


  metaInfo () {

   return {
      title: this.title,
      titleTemplate: '%s  - ' + this.$store.state.APP_INSTANCE.data.name,
      meta: [
        {name: 'description', vmid: 'description', content: '' }
      ]

    }
  },

  methods: {
    asyncDataError(error_data) {
        console.log(error_dat);
        // in here place we need cath error
        throw error_data;
    }
  }
}

</script>
