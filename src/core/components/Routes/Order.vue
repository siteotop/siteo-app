<template functional >
<v-container :class="parent.$root.mobile?'ma-0 pa-0':'my-0 py-0'">
  <v-row justify="center">
    <v-col md="8">
      <WiOrderTabs :onlyTabs="false" :typeAction="props.typeAction"></WiOrderTabs>
    </v-col>
  </v-row>
</v-container>

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
