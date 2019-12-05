<template>
<div v-if="!statusError">
  <v-container fluid >
    <v-container>
    <v-row   justify="center"   alignContent="center" class="text-center" >
      <v-col  cols="12" md="5" v-if="!loaded">
        <v-skeleton-loader
           boilerplate
           type="paragraph"

         ></v-skeleton-loader>
      </v-col>
      <v-col cols="12" v-else>
        <v-sheet class="transparent"  v-if="pageObject.meta_title">
        <h1 class="display-2 font-weight-black">{{pageObject.title}}</h1>
            <div class="mt-2 font-weight-medium">{{pageObject.description}}</div>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
  <PageItemsToolbar :hightUp="100">
    <v-btn   fab text>
      <v-icon>{{$options._icons.filter}}</v-icon>
    </v-btn>
    <v-toolbar-title><h2 class="title" >{{$store.getters.getSiteoConfig('t_ls')||'LIST VALUES'}}</h2></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn-toggle mandatory v-model="toggle_component">
      <v-btn text value="card">
          <v-icon>{{$options._icons.cards}}</v-icon>
      </v-btn>
      <v-btn  text value="list">
          <v-icon>{{$options._icons.card}}</v-icon>
      </v-btn>

   </v-btn-toggle>
   <v-btn  small fab text>
       <v-icon>{{$options._icons.sort}}</v-icon>
   </v-btn>
  </PageItemsToolbar>

  <v-container :fluid="toggle_component=='card'" :class="'grid-list-md'">
      <v-row v-if="!loaded">
        <v-col cols="12" sm="6"  md="4" lg="3" xl="2" v-for="i in [1,2,3,4,5,6]" :key="i">
          <v-skeleton-loader
             class="mx-auto"
             boilerplate
             type="card, text,actions"
           ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else   justify="center" align="stretch" >
          <template v-for="(item, i) in listItems">
            <v-col  v-bind="vColProps"
              :key="toggle_component+'-'+i"
            >
            <component
              :is = "cardComponent"
              v-bind="item"
              :index="i+1"

            >
            </component>
          </v-col>
        </template>
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
<div v-else>
    <RouteError :status="statusError.status"></RouteError>
</div>
</template>
<script>
import PageItemsToolbar from './Functional/PageItemsToolbar.vue';

import CardValues from './Cards/Values.vue';
import ListValues from './Cards/ValuesList.vue';
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

import MetaInfo from '../Pages/MetaInfo';


export default {

  mixins: [MetaInfo],


  props: {
    typeList: {
      type: String,
      default :''
    }
  },
  components: {
    PageItemsToolbar,
    CardValues,
    ListValues,
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
      toggle_component: 'card',

    }
  },

  computed: {

      cardComponent() {
         return this.toggle_component+'-'+this.typeList;
      },

      vColProps() {
          return this.toggle_component =='card'?
            {cols:12, sm:6, md:3, lg:3, xl:2} :
            {cols:12, sm:12, md:9, lg:8, xl:7};
      },

      ...mapState({
          listItems (state) {
              if (state[this.typeList]) {
                  return state[this.typeList].items.objects||[];
              } else {
                return [];
              }

          },

          pageObject (state) {
             if (state[this.typeList]) {
               return state[this.typeList].items.additional || {}
             } else {
               return {};
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

 /*
  metaInfo () {

   return {
      title: this.title,
      titleTemplate: this.countItems +  ' %s  - ' + this.$store.state.appInstance.objectActive.name,
      meta: [
        {name: 'description', vmid: 'description', content: '' }
      ]

    }
  },
*/
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
       // return response for using additional funcional page
       params.additional = 'pageObject';
       params.gp = this.$route.path;

       return new Promise ((resolve, reject)=>{

           this.$store.dispatch(this.typeList+'/getList', params).then((result)=>{

              resolve(true);
           }).catch(error=>{
             if (error.response) {
               this.$store.commit('setSrvPageErr',  error.response.data );
             } else {
                  this.$store.commit('setSrvPageErr', {status: 500}  )
             }
             resolve(error);
             //reject(error);
           });;



       })

    }


  }
}

</script>
