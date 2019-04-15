<template functional>
 <v-carousel>
    <v-carousel-item
      v-for="(element, index) in props.chldrn||[]"
      :key="index"
      :src="element._d.i"
    >
    <SpLay v-bind="{cnf: element._p, chldrn:element._ch}">
    </SpLay>
  </v-carousel-item>
 </v-carousel>
</template>

<script>
export default {

}
</script>
