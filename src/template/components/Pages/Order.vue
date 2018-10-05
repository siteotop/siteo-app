<template >

  <SectionWrap >
    <v-container >
      <v-layout  justify-center class="mb-2">
         <div text-xs-center>
           <AppActionsList></AppActionsList>
         </div >
     </v-layout>
     <v-layout  justify-center>
        <v-flex xs12 sm8 md6 >

          <component v-if="" :is="'app-form-'+typeAction"></component>

        </v-flex md9 >
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


  },



}

</script>
