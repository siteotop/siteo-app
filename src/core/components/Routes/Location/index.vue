<template>
<v-container>

  <v-card>
    <CardOpenLocation
      :locationId="locationId"
      :openRoute="true"
    >
    </CardOpenLocation>
  </v-card>

</v-container>
</template>

<script>


export default {
    //mixins: [MetaInfo, ServerFetch],
    //nameModule: 'locations',

    components: {
       CardOpenLocation: ()=> import( /* webpackChunkName: "CardOpenLocation" */ './Cards/OpenLocation.vue'),
    },

    props: {
      locationId: {
        type: String,
        default:''
      }
    }





}
</script>
