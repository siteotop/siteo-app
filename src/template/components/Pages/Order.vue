<template functional>
<SectionWrap v-if="props.typeAction">
  <v-flex xs12 text-xs-center>
    <AppActionList  :active="props.typeAction"></AppActionList>
  </v-flex>
  <v-flex md6>
    <component :is="'app-action-'+props.typeAction" :vList="true"   ></component>
  </v-flex>
</SectionWrap>
<SectionWrap v-else>
  <OrderActionButtons  :block="true"></OrderActionButtons>
</SectionWrap>
</template>

<script>
export default {
  name: 'PageOrder',

  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    }


  }

}

</script>
