<template>
<div>
  <PageItemsToolbar :hightUp="100">
    <v-btn   fab text>
      <v-icon>{{$options._icons.filter}}</v-icon>
    </v-btn>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn-toggle mandatory v-model="toggle_component">
      <v-btn text value="cards">
          <v-icon>{{$options._icons.cards}}</v-icon>
      </v-btn>
      <v-btn v-if="!$root.mobile" text value="card">
          <v-icon>{{$options._icons.card}}</v-icon>
      </v-btn>
      <v-btn text value="list">
         <v-icon>{{$options._icons.values}}</v-icon>
      </v-btn>
   </v-btn-toggle>
   <v-btn  small fab text>
       <v-icon>{{$options._icons.sort}}</v-icon>
   </v-btn>
  </PageItemsToolbar>

  <v-container :class="'grid-list-md'">
      <v-layout :class="'row wrap justify-center'"   >
        <v-flex :class="'xs12 sm6 md4'"  v-for="(item, i) in listItems"
      :key="i" >
      <component   :is="'card-'+typeList" v-bind="item" :toogle="toggle_component=='list'"></component>
      </v-flex>
    </v-layout>
   </v-container>

  <slot  name="pagination">
    <v-layout column wrap >
      <v-flex justify-center text-xs-center>
      <v-pagination

         :length="6"
       >
      </v-pagination>
    </v-flex>
   </v-layout>
 </slot>

</div>
</template>
<script>
import PageItemsToolbar from './Functional/PageItemsToolbar.vue';

import CardValues from './Cards/Values.vue';
import BPrice from './Cards/BPrice.vue';
import BHorizontal from './Cards/BPrice.vue';
//import WiExperts from '../Widgets/WiExperts.vue';
//import WiPosts from '../Widgets/WiPosts.vue';



import * as StoreModules from  '../../../store/modules';
import { mapState } from 'vuex';
import {
  mdiFilterVariant,
  mdiViewModule,
  mdiViewAgenda,
  mdiViewList,
  mdiSortVariant
} from '@mdi/js';

export default {



  props: {
    typeList: {
      type: String,
      default :''
    }
  },
  components: {
    PageItemsToolbar,
    CardValues,
    BPrice,
    BHorizontal
  },

  _icons: {
    filter:   mdiFilterVariant,
    cards:   mdiViewModule,
    card:   mdiViewAgenda,
    values:   mdiViewList,
    sort:   mdiSortVariant,

  },

  destroyed () {
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

      ...mapState({
          listItems (state) {
              if (state[this.typeList]) {
                  return state[this.typeList].items.objects||[];
              } else {
                return [];
              }

          }
      })


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

  serverPrefetch () {
    // возвращает Promise из действия, поэтому
    // компонент ждёт данные перед рендерингом
    this.registerModule();
    return this.fetchItem();
  },

  mounted() {
     if (this.$store.state.allowAsyncLoad) {
       this.registerModule();
       this.fetchItem();
     } else {
       this.registerModule(true);
     }



  },

  methods: {
    registerModule(preserveState) {
      this.$store.registerApiModule({
        name: this.typeList,
        module: StoreModules[this.typeList]('appInstance/urlID'),
        moduleOptions:  {moduleItems: true},
        preserveState: preserveState
      });
    },

    fetchItem(){
       return this.$store.dispatch(this.typeList+'/getList');
    },

    asyncDataError(error_data) {
        console.log(error_dat);
        // in here place we need cath error
        throw error_data;
    }
  }
}

</script>
