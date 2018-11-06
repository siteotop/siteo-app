<template functional>
<v-card >
 <v-card-title class="headline pb-0">
  <AppIcon name="si-locations"></AppIcon>
  {{prop._t}}
  <v-spacer></v-spacer>
 </v-card-title>
   <v-card-text>
      <span>{{props._ci}}, {{props._st}}, {{props._sn}}
      </span>
      <v-spacer></v-spacer>
      {{prop._zi}}
   </v-card-text>
 <v-card-actions>
  <AppAction
    block
    color="red"
    outline
    target="_blank"
    siicon="si-googlemaps" :href="'https://www.google.com/maps/dir/?api=1&destination='+props.lat+','+props.lng" _at="Direction in Google Maps" >
  </AppAction>
 </v-card-actions>
 <v-card-actions>
  <AppAction
    block
    outline
    target="_blank"
    siicon="si-locations" :href="'geo:'+props.lat+','+props.lng" _at="Open Default Map App" >
  </AppAction>
 </v-card-actions>
</v-card>
</template>

<script>
//import BTitleProps from './_extends/b-title-props.js';

export default {
  //extends: BTitleProps,
  props: ['_ci', '_st', '_sn', '_zi', '_lat', '_lng' ]

}
</script>
