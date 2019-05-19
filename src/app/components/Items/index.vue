<template>
<div>
  <PageItemsToolbar :hightUp="100">
    <v-btn   fab text>
      <v-icon>{{$option._icons.filter}}</v-icon>
    </v-btn>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn-toggle mandatory v-model="toggle_component">
      <v-btn text value="cards">
          <v-icon>{{$option._icons.cards}}</v-icon>
      </v-btn>
      <v-btn v-if="!$root.mobile" text value="card">
          <v-icon>{{$option._icons.card}}</v-icon>
      </v-btn>
      <v-btn text value="list">
         <v-icon>{{$option._icons.values}}</v-icon>
      </v-btn>
   </v-btn-toggle>
   <v-btn  small fab text>
       <v-icon>{{$option._icons.sort}}</v-icon>
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

import {
  mdiFilterVariant,
  mdiViewModule
} from '@mdi/js';

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

  _icons: {
    filter:   mdiFilterVariant,
    cards:   mdiViewModule,
    card:   mdiViewAgenda,
    values:   mdiViewList,
    sort:   mdiSortVariant,

  }

  asyncData({store, route}) {
    console.log('loaded data items from server for route:');
    store.registerApiModule(route.name, StoreModules[route.name]('appInstance/urlID'), true);

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
      titleTemplate: '%s  - ' + this.$store.state.appInstance.objectActive.name,
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
