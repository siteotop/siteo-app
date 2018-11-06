<template>
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

</template>
