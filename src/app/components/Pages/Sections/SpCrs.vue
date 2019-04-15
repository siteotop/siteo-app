<template functional>
 <v-carousel v-bind="props.cnf" :class="data.class">
    <v-carousel-item
      v-for="(element, index) in props.chldrn||[]"
      :key="index"
      :src="element._d.i"
      v-bind="element._p?{
          transition: element._p.trn,
          reverseTransition: element._p.rtrn
        }:{}"
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
