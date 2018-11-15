<template>
  <SectionListWrap :items="items" :$bf="flexClass">
    <template slot-scope="{item}">
       <b-expert
        :_t="item.name"
        :_d="item.about"
        :_s="item.position"
        :_m="item.picture"
        :$vl="$vl"
        _al="/go/order"
        _at="Order in Expert"
        ></b-expert>
    </template>
  </SectionListWrap>
</template>

<script>
import ListExtend from './_extends/List';

export default {
  extends: ListExtend,
  storeName: 'APP_EXPERTS',
}

</script>
