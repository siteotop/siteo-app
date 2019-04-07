<template functional>
<StpSection >
  <v-container >
   <v-layout >
      <v-flex xs12 text-xs-center class="subheading" >
        {{parent.$store.state.appInstance.objectActive.description}}
      </v-flex>
    </v-layout>
  </v-container>
</StpSection>
</template>

<script>
export default {

}

</script>
