<template functional>
<v-timeline
  v-bind="{
      dense: parent.$root.mobile? true: props.cnf.d,
      alignTop: props.cnf.a,
      dark: props.cnf.r,
      light: props.cnf.l,
    }"
  >
    <!-- _props  in element.p-->
  <v-timeline-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element.p?{
      color: element.p.c,
      fillDot: element.p.f,
      hideDot: element.p.h,
      icon: element.p.i,
      iconColor: element.p.n,
      left: element.p.l,
      right: element.p.r,
      small: element.p.s,
      large: element.p.a,
      }:element.p"
  >
     <!-- _children in element.h-->
     <StChildrenHelper
        :element="element.h"
        :list="true">
     </StChildrenHelper>
  </v-timeline-item>
</v-timeline>
</template>
<script>

export default {

}
</script>
