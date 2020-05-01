<template >
<div v-if="!statusError">
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
    @click="drawer=true"
  >
    <v-icon>$vuetify.icon.next</v-icon>
</v-btn>
</v-slide-x-transition >
  <v-navigation-drawer
    v-if="!loaded"
    v-model="drawer"
    v-bind="drawerProps"
  >

  <template v-slot:prepend>
      <v-toolbar
        flat
      >
        <v-btn
          v-if="!openRoute"
          icon
          @click="closeDrawer">
          <v-icon>$vuetify.icons.prev</v-icon>
        </v-btn>
        <v-btn
          v-else
          icon
            :to="{name: 'locations'}"
          >
          <v-icon>$vuetify.icons.prev</v-icon>
        </v-btn>
        <v-toolbar-title  >
          <!-- something text  -->
        </v-toolbar-title>
        <v-spacer>
        </v-spacer>
        <v-btn

          icon
          @click="closeDrawer">
          <v-icon>$vuetify.icons.close</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
      <v-img
        v-if="pageObject.picture"
        height="250"
        class="grey lighten-5"
        :gradient="'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
        :src="pageObject.thumb420"
        :alt="pageObject.title"

      >
      </v-img>



    <v-alert v-if="errorResponse" type="error">
        Error: {{errorResponse.error_description}}
    </v-alert>
     <v-card
      flat
     >
       <v-card-title>
          {{pageObject.title}}
       </v-card-title>
           <v-divider></v-divider>
    <v-card-actions>
    <v-btn
        v-for="(action, i) in actions"
        :key="i"
        icon
        outlined
        color="primary"
        xLarge
        :disabled="action.disabled"
        @click="action.eventClick"
      >
        <v-icon>{{$options._icons[action.icon]}}</v-icon>
    </v-btn>
    </v-card-actions>
         <v-divider></v-divider>
    <v-list >

      <v-list-item three-line >
        <v-list-item-icon>
          <v-icon>{{$options._icons.mapMarker}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{pageObject.street}}</v-list-item-title>
          <v-list-item-subtitle>{{pageObject.city}}, {{pageObject.region}}, {{pageObject.country}} {{pageObject.zipcode}}</v-list-item-subtitle>
          <v-list-item-subtitle class="">{{pageObject.lat}}, {{pageObject.lng}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
           <HelperMenu :actions="treeData.adress.actions"></HelperMenu>
        </v-list-item-action>
      </v-list-item>

      <v-list-item  v-if="pageObject.gbsess" two-line >
        <v-list-item-icon>
          <v-icon>{{$options._icons.googlemaps}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Open google Maps</v-list-item-title>
          <v-list-item-subtitle>google maps</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
           <HelperMenu :actions="treeData.gbsess.actions"></HelperMenu>
        </v-list-item-action>
      </v-list-item>

      <v-list-item v-if="pageObject.phone" >
        <v-list-item-icon>
          <v-icon>{{$options._icons.phone}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{pageObject.phone}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
           <HelperMenu :actions="treeData.phone.actions"></HelperMenu>
        </v-list-item-action>
      </v-list-item>

      <v-list-item v-if="pageObject.website" >
        <v-list-item-icon>
          <v-icon>{{$options._icons.earth}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title><a @click="goToWebsite">{{pageObject.website}}</a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="pageObject.pricelink" >
        <v-list-item-icon>
          <v-icon>{{$options._icons.price}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Price</a></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
           <HelperMenu :actions="treeData.pricelink.actions"></HelperMenu>
        </v-list-item-action>
      </v-list-item>



      </v-list>
      <v-card-text>
          {{pageObject.preview}}
      </v-card-text>

      <v-card-text v-if="valuesItems.length">
        <v-card-title class="ml-n3">
           {{$store.getters.getSiteoConfig('t_ls')}}
        </v-card-title>
        <v-chip
            v-for="(value, index) in valuesItems"
            pill
            link
            :key="index"
            class="mr-2"
            :to="{name:'locations', params: { category: prefixLocCat+value.idUrl   }}"
          >
            <v-avatar left>
              <v-img v-if="value.thumb120" :src="value.thumb120"></v-img>
            </v-avatar>
             {{value.title}}
          </v-chip>
      </v-card-text>


   </v-card>


  </v-navigation-drawer>
  <v-navigation-drawer
    v-else
    v-model="drawer"
    v-bind="drawerProps"
  >
  <v-toolbar
    flat
  >
    <v-btn
      icon
      @click="closeDrawer">
      <v-icon>$vuetify.icons.prev</v-icon>
    </v-btn>
    <v-skeleton-loader
      width="300"
      type="heading"
    >
    </v-skeleton-loader>
  </v-toolbar>
  <v-skeleton-loader
    type="image, list-item-avatar@6, list-item-three-line"
  >
  </v-skeleton-loader>
  </v-navigation-drawer>
</div>
<v-navigation-drawer v-else v-model="drawer"
v-bind="drawerProps">
  <ErrorPage  :status="statusError.status"></ErrorPage>

</v-navigation-drawer>

</template>

<script>


import ServerFetch from '../../_mixins/serverFetch';
import locations from  '../../../../store/modules/locations';
import { mapState } from 'vuex';
import HelperMenu from './Helper/Menu.vue';
import {
  mdiMapMarker,
  mdiPhone,
  mdiEarth,
  mdiDirections,
  mdiGoogleMaps,
  mdiBookmark,
  mdiContentCopy,
  mdiCurrencyUsd,
  mdiMap
} from '@mdi/js';

export default {
  mixins: [ServerFetch],
  nameModule: 'location',

  _icons: {
    mapMarker: mdiMapMarker,
    phone: mdiPhone,
    earth: mdiEarth,
    directions: mdiDirections,
    googlemaps: mdiGoogleMaps,
    bookmark: mdiBookmark,
    copy: mdiContentCopy,
    price: mdiCurrencyUsd,
    map: mdiMap
  },

  components: {
    HelperMenu
  },

  props: {

    //uses when componnet using in route location
    openRoute: {
      type:Boolean,
      default: false
    },

    locationIdUrl: {
      type: [String, Boolean],
      default: ''
    },

    store: {
      type: String,
      default: ''
    },

    websiteId: {
      type: String,
      default: ''
    },

    location: {
      type: [Object, Boolean],
      default: false
    }
  },

  data() {
    return {
        drawer: true,
        moduleAction: 'getObject',
        errorResponse: false,
        locationData: false,
        toggle_component: 'card',
        // actions for main card-actions
        prefixLocCat:  this.$store.getters.getSiteoConfig('rlc'),
        actions: [

          {
             icon: 'directions',
             eventClick: this.goToDirect
          },

          {
             icon: 'bookmark',
             disabled: true,
             eventClick: ""

          }
        ],

        treeData: {
            adress: {
                actions: [
                    {
                      textKey: ()=>{
                          return this.$t('route');
                      },
                      icon: 'directions',
                      onClick: this.goToDirect
                    },

                    {
                      textKey: ()=>{
                          return this.$t('copy');
                      },
                      icon: 'copy',
                      onClick: this.copyLatLng
                    }
                ]
            },

            gbsess: {
              actions: [
                {
                  textKey: ()=>{
                      return this.$t('open');
                  },
                  icon: 'googlemaps',
                  onClick: this.goToGoogleMaps
                },
              ]
            },

            phone: {
              actions: [
                {
                  textKey: ()=>{
                      return this.$t('call');
                  },
                  icon: 'phone',
                  onClick: this.callPhone
                },

                {
                  textKey: ()=>{
                      return this.$t('copy');
                  },
                  icon: 'copy',
                  onClick: this.copyPhone
                },
              ]
            },
            pricelink: {
              actions: [
                {
                  textKey: ()=>{
                      return this.$t('open');
                  },
                  icon: 'price',
                  onClick: this.goToPrice
                },
              ]
            }

        }

    }
  },

  watch: {
      locationIdUrl(newId, oldId) {
          if (newId!=oldId) {
             this.fetchItem();
          }
      },

      drawer(drw, oldDrw) {
          if (drw == true) {
             this.$emit('drawer-open');
          } else {
            this.$emit('drawer-close');

          }
      }
  },

  computed: {
    drawerProps() {
       return this.openRoute?
       {

         //app: true,
        // permanent: true,
         absolute:true,
         stateless: true,
         clipped:true,
         width: "500",
         class: "elevation-0"
       }:
       {
         fixed: true,
         stateless: true,
         width: "500",
         class: "elevation-5"
       };

    },

    ...mapState({
          pageObject (state) {
              return state.location? state.location.objectActive: {};
          }


        }),

        valuesItems() {
            if (this.pageObject.values) {
              return  this.pageObject.values.items||[];
            } else {
              return [];
            }
        }


  },

  methods: {


    // emit event for close drawer
    closeDrawer() {
       if (this.openRoute) {
          this.drawer = false;
       }
       this.$emit('close-dialog');
    },

    getStoreModule(){
        let getter = 'appInstance/urlID';
        if (this.websiteId) {
            getter = ()=>{
              return   '/apps/'+this.websiteId;
            }
        }
        let store =  locations(getter);
        return store;

    },
    getParamsForFetch() {

        if (this.locationIdUrl) {
          return  this.locationIdUrl;
        }
        else {
            this.loaded = false;
            throw "id_is_empty";
        }
    },

    resultResolve(resultLocation) {

    },

    goToDirect() {
       let url = 'https://maps.google.com/?saddr=Current+Location&daddr='+this.pageObject.lat+','+this.pageObject.lng;
        window.open(url, '_blank');
    },

    copyLatLng() {
        this.copyText(this.pageObject.lat+','+this.pageObject.lng);
    },

    copyText(text) {
      if (navigator.clipboard) {
          navigator.clipboard.writeText(text)
              .then(() => {
                console.log('Text copied to clipboard');
              })
              .catch(err => {
                // This can happen if the user denies clipboard permissions:
                console.error('Could not copy text: ', err);
              });
        }
    },

    goToGoogleMaps() {
      let url = this.pageObject.gbsess;
      window.open(url, '_blank');
    },
    copyPhone() {
      this.copyText(this.pageObject.phone);
    },
    callPhone() {
        let url="tel:"+ this.pageObject.phone;
        window.open(url);
    },
    goToWebsite(event) {
        event.stopPropagation();
        let url=this.pageObject.website;
        window.open(url, '_blank');
    },

    goToPrice(event) {
        let url=this.pageObject.pricelink;
        window.open(url, '_blank');
    }

  }


}

</script>
