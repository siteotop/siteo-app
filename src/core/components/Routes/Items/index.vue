<template>
<div v-if="!statusError">
  <v-container v-if="loaded" >
        <v-row   justify="center"   alignContent="center" class="text-center" >
          <v-col  cols="12" md="5" >
            <v-skeleton-loader
               boilerplate
               type="paragraph"

             ></v-skeleton-loader>
          </v-col>
        </v-row>
  </v-container>

  <v-container tag="section" fluid  v-if="pageObject.meta_title&&!loaded">
    <v-container class="container-text">
    <v-row   justify="center"   alignContent="center" class="text-center" >

      <v-col cols="12">
        <v-sheet class="transparent"  v-if="pageObject.meta_title">
           <h1 class="display-2 font-weight-black">{{pageObject.title}}</h1>
            <div class="mt-2 font-weight-medium">{{pageObject.description}}</div>
        </v-sheet>
      </v-col>
    </v-row>
    </v-container>
  </v-container>
  <PageItemsToolbar :hightUp="100">
    <v-menu
      eager
      :nudge-width="200"

    >
      <template v-slot:activator="{ on }">

        <v-btn :disabled="vcategories.length==0"  fab text  v-on="on">
          <v-icon>{{$options._icons.filter}}</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item  exact tag="a" :to="{name: 'values'}">
            <v-list-item-content>
              <v-list-item-title>{{$store.getters.getSiteoConfig('t_ls')||'Back'}} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item  tag="a" :to="{name: 'values', params: {category: (prefixCategory + cat.idUrl)}}"  v-for="(cat, i) in vcategories" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{cat.title}} <span class="grey--text text--lighten-1">{{cat.count}}</span></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

    <v-toolbar-title><h2 class="title" >{{category_title}} ТОП {{topCount}}  </h2></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn-toggle mandatory v-model="toggle_component">
      <v-btn text value="card">
          <v-icon>{{$options._icons.cards}}</v-icon>
      </v-btn>
      <v-btn  text value="list">
          <v-icon>{{$options._icons.card}}</v-icon>
      </v-btn>

   </v-btn-toggle>



   <v-menu
     v-model="ordermenu"
     :close-on-content-click="false"
     :nudge-width="200"
     offset-x
   >
     <template v-slot:activator="{ on }">
       <v-btn  small fab text  v-on="on">
           <v-icon>{{$options._icons.sort}}</v-icon>
       </v-btn>
     </template>
     <v-card>
       <v-card-text>
       <v-select
          v-model="limit"

          :items="[ '10',  '20', '30', '50']"
          label="Limit"
          filled
        ></v-select>
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn disabled>OK</v-btn>
          <v-btn @click="ordermenu=false" >Cancel</v-btn>
      </v-card-actions>
     </v-card>
   </v-menu>
  </PageItemsToolbar>

  <v-container :fluid="toggle_component=='card'" :class="'grid-list-md'">
      <v-row v-if="loaded">
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
              :clickOnVideo="clickOnVideo"

            >
            </component>
          </v-col>
          <v-col v-if="i===0||(i%7==0)" v-bind="vColProps">
            <v-card><s-adsense :adType="toggle_component">
            </s-adsense>
          </v-card>
          </v-col>
        </template>
        <v-col v-if="showMore"  v-bind="vColProps">
          <v-card height="100%">
             <v-row justify="center"   alignContent="center" class="fill-height text-center">
               <v-col>
                  <v-btn :loading="loadingMore" :disable="loadingMore" x-large @click="getMoreItems"> Load more</v-btn>
               </v-col>
             </v-row>

           </v-card>
         </v-col>

    </v-row>
   </v-container>

   <DialogVideoYoutube v-if="videoActiveObject" :videoId="videoActiveObject.videoId"  :title="videoActiveObject.title" @close-dialog="videoActiveObject=false">
   </DialogVideoYoutube>

  <!--<slot  name="pagination">
    <v-row>
      <v-col  justify="center" class="text-center">
      <v-pagination
         :length="6"
       >
      </v-pagination>
    </v-col>
   </v-row>
   </slot>
 -->
     <PageSchema v-if="pageObject.jsonStructure&&pageObject.jsonStructure.length"
        :structure = "pageObject.jsonStructure"
        :sharing = "true"
     >
     </PageSchema>

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



import values  from  '../../../store/modules/values';
import { mapState } from 'vuex';
import {
  mdiFilterVariant,
  mdiViewModule,
  mdiViewAgenda,
  mdiViewList,
  mdiSortVariant
} from '@mdi/js';
import  _find  from 'lodash/find';

import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';

export default {

  mixins: [MetaInfo, ServerFetch],

  nameModule: 'values',

  props: {

    /**
      dirty category (with required prefix or suffix)
    */
    category: {
      type: String,
      default :''
    },


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

  created() {
      this.typeList = this.$options.nameModule;
      this.findRealCategory(this.category);
  },



  data() {
    return {

      videoActiveObject: false,
      typeList:'',
      prefixCategory:'',
      realCategory: false,
      ordermenu: false,
      notLoaded: true,
      toggle_component: 'card',
      limit: this.$store.getters.getSiteoConfig('seo_limit'),
      autoHreflang: true   // generate automatic hreflangs for all multilanuages websites versions
    }
  },

  watch: {
      category(newId, oldId) {
          if (newId!=oldId) {
            this.findRealCategory(newId);
            this.fetchItem();
          }
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

      category_title() {
          if (this.category) {
             var o =  _find(this.vcategories, ['idUrl', this.realCategory ] );
             if (o) {
               return  o.title;
             }
          }
         return  this.$store.getters.getSiteoConfig('t_ls')||'LIST VALUES'
      },

      metaTitle() {

         return this.pageObject.meta_title?
            this.pageObject.meta_title.replace(/\{\{([^}]+)\}\}/, (i, match)=>{
                    if (match == 'N') {
                      return this.countItems;
                    }
                    return   match
                })
                :   (this.countItems + ' ' + this.category_title) ;
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
               return state[this.typeList].items.additional.pageObject || {}
             } else {
               return {};
             }

          },

          vcategories (state) {
             if (state[this.typeList]) {
               return state[this.typeList].items.additional.vcategories || []
             } else {
               return [];
             }

          },

          countItems(state) {
            if (state[this.typeList]) {
                return state[this.typeList].items.pagination.servercount || 0;
            }
          },

          limitItems(state) {

            if (state[this.typeList]) {
                return state[this.typeList].items.pagination.limit;
            }
          },

          showMore(state) {

            if (state[this.typeList]) {
                return state[this.typeList].items.pagination.showMore;
            }
          },




        /*  loaded(state) {
            if (state[this.typeList]) {
                return state[this.typeList].items.firstLoaded;
            } else {
              return false;
            }
          }*/

      }),
      topCount() {
        if (this.countItems> this.limitItems) {
           return this.limitItems
        } else {
          return this.countItems;
        }
      }


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


  methods: {

    /*
        dirty category with prefix or suffix
    */
    findRealCategory(path_category) {
      var path = this.$store.getters.getSiteoConfig('seo_path_'+this.typeList);

      var mathes= path.match(new RegExp("\\((.*)\\["));
      if (mathes[1]) {
        this.prefixCategory = mathes[1];
        if (path_category) {
          this.realCategory = path_category.replace(mathes[1], "");
        } else {
          this.realCategory = false;
        }
      } else {
        return false;
      }
    },

    registerModule(preserveState) {
      this.$store.registerApiModule({
        name: this.$options.nameModule,
        module: values('appInstance/urlID'),
        moduleOptions:  {moduleItems: true},
        preserveState: preserveState
      });
    },

    getParamsForFetch() {
      let params={};
      if (this.limit != 10 ){
        params = {limit:this.limit};
      }

      // return response for using additional funcional page
      params.additional = true;
      params.gp = this.$route.path;
      if  (this.realCategory) {
         params.category = this.realCategory;
      };

      return params;
    },



    getMoreItems() {
      this.loadingMore = true;
      var params = this.getParamsForFetch();
      var pagination =  this.$store.getters[this.typeList+'/pagination'];
      params.offset =parseInt(pagination.offset) + parseInt(pagination.limit);
      params.append = true;
      params.additional ='';
      params.gp = false;
      this.$store.dispatch(this.typeList+'/getList', params).then((result)=>{
          this.loadingMore = false;
      }).catch(error=>{
         this.loadingMore = false;
        //console.log(error);
      });;

    },

    clickOnVideo(eventTitle) {
        this.videoActiveObject = eventTitle;


    }


  }
}

</script>
