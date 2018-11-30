<template functional >
  <SectionListWrap v-bind="props" :items="parent.$store.state.APP_EXPERTS.items.objects" :$bf="(props.toggleComponent == 'list'||props.toggleComponent == 'card')? '  xs12 ': 'd-flex xs12 sm6 md4'">
    <template slot-scope="{item}">
       <b-expert
        :_t="item.name"
        :_d="item.about"
        :_s="item.position"
        :_m="item.picture"
        :$vl="props.$vl"
        _al="/go/order"
        _at="Order in Expert"
        ></b-expert>
    </template>
  </SectionListWrap>
</template>

<script>

export default {

}

</script>
