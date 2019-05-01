<template functional>
 <v-carousel
    v-bind="{
       cycle: props.cnf.c,
       dark: props.cnf.d,
       light: props.cnf.l,
       height: props.cnf.h,
       hideControls: props.cnf.i,
       hideDelimiters: props.cnf.e,
       reverse: props.cnf.r,
       vertical: props.cnf.v
     }"
    :class="data.class">
    <v-carousel-item
      v-for="(element, i) in props.chldrn||[]"
      :key="i"
      :src="element._d? element._d.i: element._d"
      v-bind="element._p?{
          transition: element._p.t,
          reverseTransition: element._p.r
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
