<template>
<v-container  fluid class=" pa-0 fill-height" :style="divHeight?{height: (divHeight+'px')}:''">


    <CardOpenLocation
      :locationId="locationId"
      :openRoute="true"
    >
    </CardOpenLocation>
    <LocationsMap
      v-if="activeMap"

     >

    </LocationsMap>

</v-container>
</template>

<script>


export default {
    //mixins: [MetaInfo, ServerFetch],
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





}
</script>
