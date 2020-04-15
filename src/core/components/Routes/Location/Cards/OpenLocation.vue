<template >
<v-slide-x-transition >
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
          icon
          @click="closeDrawer">
          <v-icon>$vuetify.icons.prev</v-icon>
        </v-btn>
        <v-toolbar-title >
          {{pageObject.title}}
        </v-toolbar-title>
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
        icon
        outlined
        color="primary"
        xLarge
        @click="goToDirect"
      >
        <v-icon>{{$options._icons.directions}}</v-icon>
    </v-btn>
    </v-card-actions>
         <v-divider></v-divider>
    <v-list >

      <v-list-item two-line @click="">
        <v-list-item-icon>
          <v-icon>{{$options._icons.mapMarker}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{pageObject.street}}</v-list-item-title>
          <v-list-item-subtitle>{{pageObject.city}}, {{pageObject.region}} {{pageObject.zipcode}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item  v-if="pageObject.gbsess" two-line @click="">
        <v-list-item-icon>
          <v-icon>{{$options._icons.googlemaps}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Open google Maps</v-list-item-title>
          <v-list-item-subtitle>google maps</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="pageObject.phone" @click="">
        <v-list-item-icon>
          <v-icon>{{$options._icons.phone}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{pageObject.phone}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="pageObject.website" @click="">
        <v-list-item-icon>
          <v-icon>{{$options._icons.earth}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title><a href="">{{pageObject.website}}</a></v-list-item-title>
        </v-list-item-content>
      </v-list-item>




   </v-list>
      <v-card-text>
          {{pageObject.preview}}
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
</v-slide-x-transition >
</template>

<script>


import ServerFetch from '../../_mixins/serverFetch';
import locations from  '../../../../store/modules/locations';
import { mapState } from 'vuex';

import {
  mdiMapMarker,
  mdiPhone,
  mdiEarth,
  mdiDirections,
  mdiGoogleMaps
} from '@mdi/js';

export default {
  mixins: [ServerFetch],
  nameModule: 'location',
  _icons: {
    mapMarker: mdiMapMarker,
    phone: mdiPhone,
    earth: mdiEarth,
    directions: mdiDirections,
    googlemaps: mdiGoogleMaps
  },
  props: {

    //uses when componnet using in route location
    openRoute: {
      type:Boolean,
      default: false
    },

    locationId: {
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

    }
  },

  watch: {
      locationId(newId, oldId) {
          if (newId!=oldId) {
             this.fetchItem();
          }
      }
  },

  computed: {
    drawerProps() {
       return this.openRoute?
       {

         //app: true,
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
          },
        })


  },

  methods: {

    // rechange function
    errorResolve() {

    },
    // emit event for close drawer
    closeDrawer() {
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

        if (this.locationId) {
          return  this.locationId;
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
    }

  }


}

</script>
