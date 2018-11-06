<template functional>
<v-container class="grid-list-xs pa-0">
  <v-layout row wrap >
    <v-flex xs12 v-for="(location, index) in parent.$store.state.APP_INSTANCE.locations" :key="index">
  
      </v-flex>
   </v-layout>
</v-container>
</template>

<script>
//https://stackoverflow.com/questions/9688607/how-to-open-a-mobile-devices-map-app-when-a-user-clicks-on-a-link
// Google Maps link https://developers.google.com/maps/documentation/urls/guide#search-action
/**
<AppAction
  target="_blank"
  siicon="si-locations" :href="'geo:'+location.lat+','+location.lng" _at="Open Map App" >
</AppAction>
*/
export default {

}
</script>
