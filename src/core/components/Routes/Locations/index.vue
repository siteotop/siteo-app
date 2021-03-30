<template>
<div v-if="!statusError" class="mb-3 fill-height"  >
  <v-container  :fluid="activeMap" class=" pa-0 fill-height" :style="divHeight?{height: (divHeight+'px')}:''">

  <v-slide-x-transition >
    <v-btn
      v-if="!drawer"
      absolute
      dark
      depressed
      top
      left
      width="24"
      elevation="2"
      color="primary darken-3"
      class="pr-0"
      style="top:18px; left:-24px; z-index:3;"
      @click="toogleDrawer"
    >
      <v-icon>$vuetify.icon.next</v-icon>
  </v-btn>
</v-slide-x-transition >

    <v-navigation-drawer
        width="500"
        v-model="drawer"
        absolute
        floating
        stateless

        :height="divHeight||'100%'"
        class="elevation-2"
      >

      <template v-slot:prepend>
        <v-toolbar
          flat
        >
        <v-toolbar-title> <h1 class="text-h6">{{pageTitleH1}}</h1></v-toolbar-title>
        <v-spacer>
        </v-spacer>
        <v-btn
          icon
          @click="toogleDrawer">
          <v-icon v-if="!mobileMode">$vuetify.icons.close</v-icon>
          <v-icon v-else>{{$options._icons.map}}</v-icon>
        </v-btn>
      </v-toolbar>
        <component
         :is="'v-img'"
         :src="categoryObject.thumb420"
         max-height="150"
         :gradient="'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
         class="primary darken-4"
         >
           <v-container>
             <v-row>

               <v-col>
                 <SiteoPlugin
                     pluginName="SiteoPluginSelectItems"
                     :value ="categoryObject.idUrl"
                     :pluginOptions="{
                       eventOnChange: onChangeCategory,
                       label: $store.getters.getSiteoConfig('t_ls'),
                       startObject: categoryObject._id? categoryObject:false,

                       vComp: {
                         //hint:'Choose website',
                         itemValue:'idUrl',
                         itemText:'title',
                         //chips: true,
                         //deletableChips:true,
                         rounded: false,
                         clearable: true
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
                       label: $store.getters.getSiteoConfig('t_ac'),
                       eventOnChange: onChangeLocation  ,
                       startObject: locationObject._id? locationObject:false,

                       vComp: {
                         itemValue:'idUrl',
                         itemText:'title',
                         hint:'Choose website',
                         rounded: false,
                         clearable: true
                       //  chips: true,
                       //  deletableChips:true,
                        }
                   }"
                 >
                 </SiteoPlugin>

               </v-col>
               <v-col cols="12" class="text-center white--text">

                   <strong class="text-subtitle-1">{{categoryObject.subtitle}}</strong>
               </v-col>

             </v-row>
           </v-container>
        </component>
        </template>

      <v-card
        tile
        class="grey lighten-5"
       >

      <v-card-text v-if="categoryObject.preview">
        {{categoryObject.preview}} <router-link :to="{ name: 'value', params: {
          valueIdUrl: categoryObject.idUrl
          } }">{{$store.getters.getSiteoConfig('t_re')}} {{categoryObject.title}}</router-link>
      </v-card-text>


      <v-divider>
      </v-divider>
      <v-card-text v-if="countItems==0">
          <v-alert v-if="!loaded" color="warning" border="left">
              <!--{{$t('list')}}-->list  empty<!--{{$t('empty')}}-->
          </v-alert>
      </v-card-text >
        <v-toolbar v-else flat>
          <v-toolbar-title><h2 class="text-h6">
              <span v-if="locationObject.title">
                {{locationObject.country}}, {{locationObject.title}}:
              </span>
              {{$store.getters.getSiteoConfig('t_ac')}}
              {{categoryObject.title}}
          </h2>
          </v-toolbar-title>
          <v-spacer>
          </v-spacer>
          <!--{{$t('top')}}--> top:
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
              <CardLocation
                :location="item"
                :index="i+1"
                :clickOnLocation="clickOnLocation"
              >
              </CardLocation>
            </v-col>
            <v-col
              cols="12"
              v-if="i===0||(i%7==0)" >

                <PAd adType="list">
                </PAd>

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

        <v-card-actions v-if="$store.getters.getSiteoConfig('actionLink')">
          <v-spacer>
          </v-spacer>
            <v-btn tag="a" target="_blank" :href="$store.getters.getSiteoConfig('actionLink')" large color="primary">
                {{$store.getters.getSiteoConfig('actionText')}}
            </v-btn>

          <v-spacer>
          </v-spacer>
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>

    <LocationsMap
      v-if="activeMap"
      :locations="listItems"
      :autoCenter="true"
      :openedPopup="activeId"
      :hideControl="hideControl"
      :zoom="zoomMap"
      @activate-marker="openActiveLocation"
     >

    </LocationsMap>
  </v-container>

    <CardOpenLocation
    v-if="locationActiveObject"
    :locationIdUrl="locationActiveObject.idUrl"
    :store="$options.nameModule"

    @close-dialog="closeOneLocation()">
  </CardOpenLocation>
</div>
<ErrorPage v-else :status="statusError.status"></ErrorPage>

</template>

<script>

import locations from  '../../../store/modules/locations';
import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';
import CardLocation from  './Cards/Location.vue';

import {
  mdiMap
} from '@mdi/js';

import { mapState } from 'vuex';
const startZoom = 6;
export default {
    mixins: [MetaInfo, ServerFetch],

    nameModule: 'locations',
    _icons: {
      map: mdiMap
    },
    storeModule: locations('appInstance/urlID'),

    components: {
      CardLocation,
      CardOpenLocation: ()=> import( /* webpackChunkName: "CardOpenLocation" */ '../Location/Cards/OpenLocation.vue'),


    //  PAd: ()=> import( /* webpackChunkName: "adsense" */ '../../Structure/PAdsense/Index.vue'),
      LocationsMap: ()=> import( /* webpackChunkName: "map" */ './Map/index.vue'),

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
          mobileMode: true,
          hideControl: true,
          drawer: true,
          categoryReal: '',
          locationReal: '',
          activeMap: false,
          locationActiveObject: false,  // for active location
          activeId: false,
          activeStatus: false,
          divHeight: false,
          zoomMap: startZoom

         }
    },

    created() {
        this.setClearParamFromPath(this.category, 'category');
        this.setClearParamFromPath(this.location, 'location');

    },

    mounted() {
        let minusHight = 64;
        this.mobileMode = !this.$vuetify.breakpoint.smAndUp;
        if (!this.mobileMode) {
          this.activeMap = true;
        }
        this.divHeight = this.$vuetify.breakpoint.height - minusHight;

        // if isset hash company
        if (this.$route.hash) {
          const found = this.$route.hash.match(new RegExp('([A-Za-z0-9_\-]+?)$', 'i'));
          if (found!=null) {
            this.$router.push({
                name: 'location',
                params: {
                  locationIdUrl: found[1],
                }
              });
          }

        }

    },

    watch: {
        category(newId, oldId) {
            if (newId!=oldId) {
              this.setClearParamFromPath(newId, 'category');
              this.fetchItem();
              this.closeOneLocation();
            }
        },

        location(newId, oldId) {
            if (newId!=oldId) {
              this.setClearParamFromPath(newId, 'location');
              this.fetchItem();
            }
            if (newId) {
               this.zoomMap = 13;
            } else {
              this.zoomMap = startZoom;
            }
        }
    },

    computed: {
       citiesLink() {
         var siteoId =this.$store.getters['getSiteoConfig']('mainWebsite');
         return '/apps/'+siteoId+'/locations?attribute='+this.$store.getters['appInstance/activeId'];
       },

       categoryPrefix() {
          return this.$store.getters.getSiteoConfig('rlc');
       },
       locationPrefix() {
          return this.$store.getters.getSiteoConfig('rll');
       },

       pageTitleH1() {
         if ( this.pageObject.title) {
           return this.pageObject.title;
         }

         let startText = '';
         if (this.categoryObject.title) {
           startText+=this.$store.getters.getSiteoConfig('t_ac')+ ' '+this.categoryObject.title;
         } else {
           startText = this.$store.state.appInstance.objectActive.slogan || (this.$store.getters.getSiteoConfig('t_ac') + ' ' +  this.$store.state.appInstance.objectActive.name)
         }

         if (this.locationObject.title) {
           // field region using for language differences (like in Ukrainian в Будапешті)
            startText+=' '+ /*this.$t('in')*/'в' + ' '+this.locationObject.region;
         }
         return startText
       },

       metaTitle() {
          if ( this.pageObject.meta_title) {
            return this.replaceTitle(this.pageObject.meta_title);
          }
          return  this.pageTitleH1
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
      clickOnLocation(event, locationObject) {
        event.preventDefault();
        event.stopPropagation();
        if (locationObject == false) {
            this.closeOneLocation();
        } else {
          this.openActiveLocation(locationObject)
        }

      },
      openActiveLocation(locationObject) {
        this.locationActiveObject = locationObject;
        this.activeId = locationObject._id;
        this.activeStatus = true;
        this.changeLocationRoute(locationObject.idUrl);

      },
      closeOneLocation() {
        this.locationActiveObject=false;
        this.activeId = false;
        this.activeStatus = false;
        this.$router.replace({
            hash: ''
          })
      },

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

      toogleDrawer() {
        this.drawer=!this.drawer;
        if (!this.drawer) {
           if (!this.activeMap) {
              this.activeMap = true;
           }
           if (this.mobileMode) {
             this.hideControl = false;
           }
        } else {
          this.hideControl = true;
        }
      },

      changeLocationRoute(idUrl) {

          this.$router.replace({
              hash: idUrl
            })

      }


    }


}
</script>
