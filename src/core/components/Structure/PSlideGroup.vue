<template functional>
 <v-slide-group
    v-bind="{
      dark: props.cnf.a,
      light: props.cnf.b,
      max: props.cnf.c,
      mobileBreakPoint: props.cnf.d,
      showArrows: props.cnf.e,
     }"
    :class="data.class">
    <v-slide-item
      v-for="(element, i) in props.chldrn||[]"
      :key="i"
    >
      <!-- _children in element.h-->
    <template
      v-for="(elmt, index) in element.h||[]"
     >
       <StChildrenHelper :element="elmt">
       </StChildrenHelper>
    </template>
  </v-slide-item>
 </v-slide-group>
</template>

<script>
export default {

}
</script>
