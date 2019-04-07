<template functional>
  <StpListSection  v-bind="props"
  :$bf="(props.toggleComponent == 'list'||props.toggleComponent == 'card')? '  xs12 ': 'd-flex xs12 sm6 md4'" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-service
        :_t="item.title"
        :_d="item.preview"
        :_s="item.subtitle"
        :_m="item.picture"
        :_p="item.price"
        :_di="item.discount"
        :$vl="props.$vl"

        ></b-service>
    </template>
  </StpListSection>
</template>

<script>
export default {
}
</script>
