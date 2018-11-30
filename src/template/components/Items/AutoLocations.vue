<template functional>
  <SectionListWrap :items="parent.$store.state.APP_INSTANCE.locations" :$bf="flexClass" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-location
        :_t="item.title"
        :_ci="item.city"
        :_st="item.street"
        :_sn="item.street_n"
        :_zi="item.zipcode"
        :_lat="item.lat"
        :_lng="item.lng"
        ></b-location>
    </template>
  </SectionListWrap>
</template>

<script>


export default {

}
</script>
