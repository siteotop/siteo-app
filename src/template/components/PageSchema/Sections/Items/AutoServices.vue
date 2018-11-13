<template>
  <SectionListWrap :items="items" :$bf="flexClass" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-service
        :_t="item.title"
        :_d="item.preview"
        :_s="item.subtitle"
        :_m="item.picture"
        :_p="item.price"
        :$vl="$vl"
        ></b-service>
    </template>
  </SectionListWrap>
</template>

<script>
import ListExtend from './_extends/List';

export default {
  extends: ListExtend,
  storeName: 'APP_SERVICES',
}
</script>
