<template functional>
  <v-container class="fluid secondary darken-1 py-0 my-0">
    <v-layout>
     <v-flex text-xs-center class="pa-2 secondary--text text--lighten-4 " >
         &#169; Copyright <router-link to="/">{{parent.$store.state.APP_INSTANCE.data.name}}</router-link> | {{parent.$t('copyright', { template: 'siteo-template'})}}  <v-btn target="_blank" dark flat href="https://siteo.top"><AppIcon  name="si-logo-grey"></AppIcon>siteo.top </v-btn>
         </v-flex>
   </v-layout>
</v-container>
</template>

<script>

export default {

}

</script>
