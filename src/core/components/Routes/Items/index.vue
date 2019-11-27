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
      <v-btn  text value="card">
          <v-icon>{{$options._icons.card}}</v-icon>
      </v-btn>

   </v-btn-toggle>
   <v-btn  small fab text>
       <v-icon>{{$options._icons.sort}}</v-icon>
   </v-btn>
  </PageItemsToolbar>

  <v-container :class="'grid-list-md'">
      <v-row v-if="!loaded">
        <v-col cols="12" md="4" sm="6" v-for="i in [1,2,3,4,5,6]" :key="i">
          <v-skeleton-loader
             class="mx-auto"
             boilerplate
             type="card, text,actions"
           ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else justify="center" >
        <v-col  cols="12" md="4" sm="6" v-for="(item, i) in listItems"
      :key="i" >
      <component
        :is="'card-'+typeList"
        v-bind="item"
        :index="i+1"
        :toogle="toggle_component=='list'"></component>
      </v-col>
    </v-row>
   </v-container>

  <!--<slot  name="pagination">
    <v-row>
      <v-col  justify="center" class="text-center">
      <v-pagination
         :length="6"
       >
      </v-pagination>
    </v-col>
   </v-row>
 -->
 </slot>

</div>
</template>
<script>
import PageItemsToolbar from './Functional/PageItemsToolbar.vue';

import CardValues from './Cards/Values.vue';
import BPrice from './Cards/BPrice.vue';
import DialogVideoYoutube from './Cards/VideoYoutube.vue';
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
    DialogVideoYoutube

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
      notLoaded: true,
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

          },

          countItems(state) {
            if (state[this.typeList]) {
                return state[this.typeList].items.pagination.servercount || 0;
            }
          },
          loaded(state) {
            if (state[this.typeList]) {
                return state[this.typeList].items.firstLoaded;
            } else {
              return false;
            }
          }

      })


  },


  metaInfo () {

   return {
      title: this.title,
      titleTemplate: this.countItems +  ' %s  - ' + this.$store.state.appInstance.objectActive.name,
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

       // use limit from settings website
       // usefull for websites with short list, where need show all list with values
       const limit = this.$store.getters.getSiteoConfig('seo_limit');
       let params;
       if (limit != 10 ){
         params = {limit:limit};
       }
       return this.$store.dispatch(this.typeList+'/getList', params);
    }


  }
}

</script>
