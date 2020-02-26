<template functional>
 <v-carousel
    v-bind="{
       continuous: props.cnf.a,
       cycle: props.cnf.c,
       dark: props.cnf.d,
       light: props.cnf.l,
       height: props.cnf.h,
       hideDelimiterBackground: props.cnf.b,
       hideDelimiters: props.cnf.e,
       reverse: props.cnf.r,
       vertical: props.cnf.v,
       interval: props.cnf.f,
       showArrows: props.cnf.g,
       showArrowsOnHover: props.cnf.j,

     }"
    :class="data.class">
    <!-- _data  in element.d,  _props  in element.p-->
    <v-carousel-item
      v-for="(element, i) in props.chldrn||[]"
      :key="i"
      :src="element.d? element.d.i: element.d"
      v-bind="element.p?{
          transition: element.p.t,
          reverseTransition: element.p.r
        }:{}"
    >
      <!-- _children in element.h-->
    <template
      v-for="(elmt, index) in element.h||[]"
     >
       <StChildrenHelper :element="elmt">
       </StChildrenHelper>
    </template>
  </v-carousel-item>
 </v-carousel>
</template>

<script>
export default {

}
</script>
