<template >
<SectionWrap >
  <v-container v-if="typeAction">
     <v-layout >
       <v-flex xs12 text-xs-center>
         <AppActionList  :active="typeAction"></AppActionList>
       </v-flex>
     </v-layout>
     <v-layout row wrap justify-center>
       <v-flex sm8 md6>
         <component :is="'app-action-'+typeAction" :vList="true" ></component>
       </v-flex>
     </v-layout>
  </v-container>
  <v-container  v-else>
    <v-layout>
      <OrderActionButtons  :block="true"></OrderActionButtons>
    </v-layout>
  </v-container>
</SectionWrap>

</template>

<script>


export default {
  name: 'PageOrder',
  //  components: {AppActionLocations},
  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    }


  }

}

</script>
