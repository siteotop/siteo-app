<template>
  <SectionListWrap :items="items" :$bf="flexClass" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-service
        :_t="item.title"
        :_d="item.preview"
        :_s="item.subtitle"
        :_m="item.picture"
        :_p="item.price"
        ></b-service>
    </template>
  </SectionListWrap>
</template>

<script>
import ListExtend from './_extends/AutoList';

export default {
  extends: ListExtend,
  storeName: 'APP_SERVICES',
}
</script>
