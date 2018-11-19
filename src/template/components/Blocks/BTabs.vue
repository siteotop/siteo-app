<template functional>

  <v-tabs

     centered
     color="cyan"
     dark
     icons-and-text
   >
     <v-tabs-slider color="yellow"></v-tabs-slider>

     <v-tab v-for="(BComponent, index) in props.$bls" :key="index" :value="index">
       {{BComponent._n}}
       <AppIcon :name="BComponent._i"></AppIcon>

     </v-tab>

     <v-tab-item
       v-for="(BComponent, index) in props.$bls" :key="index"
      >
       <component :is="BComponent.$$" v-bind="BComponent._props"></component>
     </v-tab-item>
   </v-tabs>
</template>
<script>

export default {


}
</script>
