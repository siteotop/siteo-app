<template functional>
<v-container :class="parent.$vuetify.breakpoint.xs?'ma-0 pa-0':'my-0 py-0'">
  <v-layout justify-center>
    <v-flex md8>
      <WiOrderTabs :onlyTabs="false" :typeAction="props.typeAction"></WiOrderTabs>
    </v-flex>
  </v-layout>
</v-container>
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
