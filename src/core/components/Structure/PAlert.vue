<template functional>
<v-alert
    v-bind="{
      color: props.cnf.c,
      outlined: props.cnf.o,
      type: props.cnf.t,
      icon: props.cntnt.i,
      border: props.cnf.a,
      coloredBorder: props.cnf.d,
      dark: props.cnf.e,
      dense: props.cnf.f,
      elevation: props.cnf.g,
      height: props.cnf.h,
      light: props.cnf.k,
      maxHeight: props.cnf.l,
      maxWidth: props.cnf.m,
      minHeight: props.cnf.n,
      minWidth: props.cnf.p,
      prominent: props.cnf.r,
      text: props.cnf.s,
      tile:  props.cnf.y,
      width: props.cnf.v,
    }"
    :class="data.class"
>
    {{props.cntnt.d}}
  </v-alert>
</template>
<script>
export default {

}
</script>
