<template functional>

  <SectionWrap v-bind="props">
    <v-container >
     <v-layout  justify-center>
        <v-flex xs12 sm8 md6 >
         <AppFormOrder></AppFormOrder>
        </v-flex md9 >
   </v-layout>
   </v-container>
  </SectionWrap>

</template>

<script>

export default {
  name: 'PageOrder',



}

</script>
