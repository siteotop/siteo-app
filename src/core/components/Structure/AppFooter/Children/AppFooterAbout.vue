<template functional>
<SectionWrap >
  <v-container >
   <v-layout >
      <v-flex xs12 text-xs-center class="subheading" >
        {{parent.$store.state.appInstance.objectActive.description}}
      </v-flex>
    </v-layout>
  </v-container>
</SectionWrap>
</template>

<script>
export default {

}

</script>
