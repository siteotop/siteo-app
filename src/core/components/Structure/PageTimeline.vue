<template functional>
<v-timeline
  v-bind="{
      dense: parent.$root.mobile? true: props.cnf.d,
      alignTop: props.cnf.a,
      dark: props.cnf.r,
      light: props.cnf.l,
    }"
  >
  <v-timeline-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element._p?{
      color: element._p.c,
      fillDot: element._p.f,
      hideDot: element._p.h,
      icon: element._p.i,
      iconColor: element._p.n,
      left: element._p.l,
      right: element._p.r,
      small: element._p.s,
      large: element._p.a,
      }:element._p"
  >
    <StChildrenHelper
      v-for="(chld, y) in element._ch||[]"
      :key="y"
      :element="chld"
     >
    </StChildrenHelper>
  </v-timeline-item>
</v-timeline>
</template>
<script>

export default {

}
</script>
