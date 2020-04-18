<template>
<v-container  fluid class=" pa-0 fill-height" :style="divHeight?{height: (divHeight+'px')}:''">


    <CardOpenLocation
      :locationId="locationId"
      :openRoute="true"
    >
    </CardOpenLocation>
    <LocationsMap
      v-if="activeMap"
      :locations="pageObject.title?[pageObject]:[]"
      :autoCenter="true"
      zoom="16"
     >

    </LocationsMap>

</v-container>
</template>

<script>
import MetaInfo from '../Pages/MetaInfo';
import { mapState } from 'vuex';
export default {
    mixins: [MetaInfo],
    //nameModule: 'locations',

    components: {
       CardOpenLocation: ()=> import( /* webpackChunkName: "CardOpenLocation" */ './Cards/OpenLocation.vue'),
       LocationsMap: ()=> import( /* webpackChunkName: "map" */ '../Locations/Map/index.vue'),
    },

    props: {
      locationId: {
        type: String,
        default:''
      }
    },

    data() {
      return {
        activeMap: false,
        divHeight: '100%'
      }
    },

    mounted() {
      if (this.$vuetify.breakpoint.smAndUp) {
        this.activeMap = true;
      }

      this.divHeight = this.$vuetify.breakpoint.height - 64;


    },

      computed: {

        metaTitle() {
           if ( this.pageObject.title) {
             return this.pageObject.title
           }
           return  'Location Undefined';
         },

        metaDescr() {

          return this.pageObject.title
          +' - ' + this.pageObject.preview.substring(0, 90)+ '...'
          +' '+ this.pageObject.country
          +' ' + this.pageObject.city
          +' ' + this.pageObject.street
          +' ' + this.pageObject.phone;

        },
        ...mapState({
          pageObject (state) {
              return state.location? state.location.objectActive: {};
          },
        })
      }





}
</script>
