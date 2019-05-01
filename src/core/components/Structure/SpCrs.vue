<template functional>
 <v-carousel v-bind="props.cnf" :class="data.class">
    <v-carousel-item
      v-for="(element, i) in props.chldrn||[]"
      :key="i"
      :src="element._d.i"
      v-bind="element._p?{
          transition: element._p.trn,
          reverseTransition: element._p.rtrn
        }:{}"
    >
    <PLt v-bind="{cnf: element._p||{}, chldrn:element._ch}">
    </PLt>
  </v-carousel-item>
 </v-carousel>
</template>

<script>
export default {

}
</script>
