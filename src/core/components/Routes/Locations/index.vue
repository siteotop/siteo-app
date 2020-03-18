<template>
<div>
  <v-toolbar >
     <v-spacer></v-spacer>
      <v-toolbar-title>
         {{$store.getters.getSiteoConfig('t_ac')}}
         <v-chip
            v-if="categoryObject.title"
            close
            @click:close="onChangeCategory(false)"
            >
            <v-avatar left>
              <v-img :src="categoryObject.picture"></v-img>
            </v-avatar>{{categoryObject.title}}
          </v-chip>
         <v-chip
           v-if="locationObject.title"
           close
           @click:close="onChangeLocation(false)"
          >

          {{locationObject.title}}
         </v-chip>
      </v-toolbar-title>
     <v-spacer></v-spacer>
  </v-toolbar>
<v-container  :fluid="activeMap">
<v-row justify="center">

  <v-col v-bind="activeMap?
    {
      cols:12, sm:6,  md:4, lg:4, xl:4
    }:
    {
      cols:12, sm:12,  md:10, lg:8, xl:7
    }" >
    <v-card>
     <component
      :is="'v-img'"
      :src="categoryObject.picture"
      height="300"
      :gradient="'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
      class="primary darken-2"
      >
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center white--text">
                <h1 :class="smAndDown?'title' :'display-2'">{{titleWithCategory}}</h1>
                <strong class="subtitle-1">{{categoryObject.subtitle}}</strong>
            </v-col>
            <v-col>
              <SiteoPlugin
                  pluginName="SiteoPluginSelectItems"
                  :value ="categoryObject.idUrl"
                  :pluginOptions="{
                    eventOnChange: onChangeCategory,
                    label: 'Values',
                    startObject: categoryObject._id? categoryObject:false,

                    vComp: {
                      //hint:'Choose website',
                      itemValue:'idUrl',
                      itemText:'title',
                      chips: true,
                      deletableChips:true,
                      rounded: false,
                     }
                }"
              >
              </SiteoPlugin>
              <SiteoPlugin

                  pluginName="SiteoPluginSelectItems"
                  :value ="locationObject.idUrl"
                  :pluginOptions="{
                    internalApi:citiesLink,
                  //  queryParams: ,
                    label: 'Locations',
                    eventOnChange: onChangeLocation  ,
                    startObject: locationObject._id? locationObject:false,

                    vComp: {
                      itemValue:'idUrl',
                      itemText:'title',
                      hint:'Choose website',
                      rounded: false,
                      chips: true,
                      deletableChips:true,
                     }
                }"
              >
              </SiteoPlugin>

            </v-col>


          </v-row>
        </v-container>
     </component>
    <v-card-text>
      {{categoryObject.preview}}
    </v-card-text>


    <v-divider>
    </v-divider>
      <v-toolbar flat>
        <h2>{{$store.getters.getSiteoConfig('t_ac')}}
          <v-chip
             v-if="locationObject.title"
             close
             @click:close="onChangeLocation(false)"
             >
             {{locationObject.title}}
          </v-chip>
        </h2>
        <v-spacer>
        </v-spacer>
        {{$t('top')}}:
        {{topCount}}
      </v-toolbar>
      <v-card-text v-if="pageObject.description">
        {{pageObject.description}}
      </v-card-text>
      <v-row v-if="loaded">
        <v-col cols="12"  v-for="i in [1,2,3,4,5,6]" :key="i">
          <v-card>
            <v-card-text>
              <v-skeleton-loader
                 class="mx-auto"
                 type="heading"
               ></v-skeleton-loader>
            </v-card-text>
            <v-card-text>
              <v-skeleton-loader
                 class="mx-auto"
                 boilerplate
                 type=" paragraph, actions"
               ></v-skeleton-loader>
           </v-card-text>
          </v-card>

        </v-col>
      </v-row>
      <v-row v-else  class="pa-2">
          <template v-for="(item, i) in listItems">
            <v-col
              cols="12"
              class="grid-list-md"
            >
            <CardLocations
              v-bind="item"
              :index="i+1"

            >
            </CardLocations>
          </v-col>
          <v-col v-if="i===0||(i%7==0)" >
            <v-card><s-adsense adType="list">
            </s-adsense>
          </v-card>
          </v-col>
        </template>
        <v-col cols="12" v-if="showMore"  >
          <v-card height="100%">
             <v-row justify="center"   alignContent="center" class="fill-height text-center">
               <v-col>
                  <v-btn :loading="loadingMore" :disable="loadingMore" x-large @click="getMoreItems"> Load more</v-btn>
               </v-col>
             </v-row>

           </v-card>
         </v-col>

    </v-row>
    </v-card>
  </v-col>

  <v-col v-if="activeMap" v-bind="{
      cols:12, sm:6,  md:4, lg:4, xl:4
    }">
    <v-card>
      <v-toolbar>
         Map
      </v-toolbar>

    </v-card>
  </v-col>

</v-row>
</v-container>
</div>

</template>

<script>

import locations from  '../../../store/modules/locations';
import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';

import CardLocations from './Cards/Locations.vue';
import { mapState } from 'vuex';
export default {
    mixins: [MetaInfo, ServerFetch],
    nameModule: 'locations',

    components: {
      CardLocations
    },

    props: {

      /**
        dirty category (with required prefix or suffix)
      */
      category: {
        type: String,
        default :''
      },

      /**
        dirty category (with required prefix or suffix)
      */
      location: {
        type: String,
        default :''
      },


    },

    data() {
        return {
          smAndDown: true,
          categoryPrefix: '',
          locationPrefix: '',
          categoryReal: '',
          locationReal: '',
          activeMap: false
        }
    },

    created() {
        this.findPrefixes();
        this.setClearParamFromPath(this.category, 'category');
        this.setClearParamFromPath(this.location, 'location');

    },

    mounted() {
      this.smAndDown = this.$vuetify.breakpoint.smAndDown;
    },

    watch: {
        category(newId, oldId) {
            if (newId!=oldId) {
              this.setClearParamFromPath(newId, 'category');
              this.fetchItem();
            }
        },

        location(newId, oldId) {
            if (newId!=oldId) {
              this.setClearParamFromPath(newId, 'location');
              this.fetchItem();
            }
        }
    },

    computed: {
       citiesLink() {
         var siteoId =this.$store.getters['getSiteoConfig']('mainWebsite');
         return '/apps/'+siteoId+'/locations?attribute='+this.$store.getters['appInstance/activeId'];
       },

       titleWithCategory() {
         if ( this.pageObject.title) {
           return this.pageObject.title;
         }

         let startText = this.$store.getters.getSiteoConfig('t_ac');
         if (this.categoryObject.title) {
           startText+=' '+this.categoryObject.title;
         }
         return startText
       },

       metaTitle() {
          if ( this.pageObject.meta_title) {
            return this.replaceTitle(this.pageObject.meta_title);
          }
            if (this.locationObject.title) {
             return this.locationObject.title+': '+this.titleWithCategory;
           }
          return  this.titleWithCategory
       },



       ...mapState({
           listItems (state) {
               if (state.locations) {
                   return state.locations.items.objects||[];
               } else {
                 return [];
               }

           },

           pageObject (state) {
              if (state.locations) {
                return state.locations.items.additional.pageObject || {}
              } else {
                return {};
              }

           },

           countItems(state) {
             if (state.locations) {
                 return state.locations.items.pagination.servercount || 0;
             }
           },

           limitItems(state) {

             if (state.locations) {
                 return state.locations.items.pagination.limit;
             }
           },

           showMore(state) {

             if (state.locations) {
                 return state.locations.items.pagination.showMore;
             }
           },

           categoryObject(state) {
             if (state.locations) {
                if (state.locations.items.additional.category) {
                   return state.locations.items.additional.category;
                }
             }
             return {};
           },
           locationObject(state) {
             if (state.locations) {
                if (state.locations.items.additional.location) {
                   return state.locations.items.additional.location;
                }
             }
             return {};
           }
         }),
         topCount() {
           if (this.countItems> this.limitItems) {
              return this.limitItems
           } else {
             return this.countItems;
           }
         }

    },

    methods: {

      /**
        function for plugin SiteoPluginSelectItems (Locations)
      */
      onChangeLocation(element){

          /*
          let reducedElement;
          if (element) {
            reducedElement =  element;
            reducedElement = {
              'idUrl': element.idUrl
            }
          }*/
          this.coreEventOnChange(element, 'location');
      },

      onChangeCategory(element){
        /*  let reducedElement;
          if (element) {
            reducedElement =  element;
            reducedElement = {
              'idUrl': element.idUrl
            }
          }*/
          this.coreEventOnChange(element, 'category' );
      },

      coreEventOnChange(reducedElement,  paramName ) {
          // Block sets new param
          let paramReal = paramName+'Real';

          var newPartState={};
          newPartState[paramName]  = reducedElement;
          if (reducedElement) {
            this[paramReal]  = reducedElement.idUrl;
            } else {
            this[paramReal]  = '';
          }
          this.$store.commit('locations/updateAdditional', newPartState);
          // block push
          let category = this.categoryReal? (this.categoryPrefix + this.categoryReal): undefined;
          let location = this.locationReal? (this.locationPrefix + this.locationReal): undefined;
          this.$router.push({name: 'locations', params:{category: category, location:location}})
      },



      getParamsForFetch() {
        let params={};
        if (this.limit != 10 ){
          params = {limit:this.limit};
        }

        // return response for using additional funcional page
        params.additional = true;
        params.gp = this.$route.path;
        if  (this.categoryReal) {
           params.attribute = this.categoryReal;
        }
        if  (this.locationReal) {
           params.location = this.locationReal;
           params.location_website_id = this.$store.getters['getSiteoConfig']('mainWebsite');
        }

        return params;
      },

      registerModule(preserveState) {
        this.$store.registerApiModule({
          name: this.$options.nameModule,
          module: locations('appInstance/urlID'),
          moduleOptions: {moduleItems: true},
          preserveState: preserveState
        });
      },
    }


}
</script>
