<template functional>
<v-container class="grid-list-xs pa-0">
  <v-layout row wrap >
    <v-flex xs12 v-for="(location, index) in parent.$store.state.APP_INSTANCE.locations" :key="index">
    <v-card >

          <v-card-title class="headline pb-0">

              <AppIcon name="si-locations"></AppIcon>
              {{location.title}}
             <v-spacer></v-spacer>

          </v-card-title>
          <v-card-text>
            <span>{{location.city}}, {{location.street}}, {{location.street_n}}
            </span>
            <v-spacer></v-spacer>
            {{location.zipcode}}
          </v-card-text>
          <v-card-actions>


          <AppAction
          block
          color="red"
          outline
          target="_blank"
          siicon="si-googlemaps" :href="'https://www.google.com/maps/dir/?api=1&destination='+location.lat+','+location.lng" _at="Direction in Google Maps" >
        </AppAction>
  </v-card-actions>
    <v-card-actions>
        <AppAction
          block
          outline
          target="_blank"
          siicon="si-locations" :href="'geo:'+location.lat+','+location.lng" _at="Open Default Map App" >
        </AppAction>

          </v-card-actions>
        </v-card>
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
