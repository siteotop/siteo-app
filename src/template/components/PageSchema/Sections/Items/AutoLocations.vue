<template functional>
  <SectionListWrap :items="parent.$store.state.APP_INSTANCE.locations" :$bf="flexClass" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-service
        :_t="item.title"
        :_ci="item.city"
        :_st="item.street"
        :_sn="item.street_n"
        :_zi="item.zipcode"
        :_lat="item.lat"
        :_lng="item.lng"
        ></b-service>
    </template>
  </SectionListWrap>
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
