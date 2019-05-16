<template functional>
<v-progress-linear
  v-bind="{
    backgroundColor: props.cnf.a,
    backgroundOpacity: props.cnf.b,
    bufferValue: props.cnf.c,
    color: props.cnf.d,
    dark: props.cnf.e,
    light: props.cnf.f,
    height: props.cnf.g,
    rounded: props.cnf.h,
    striped: props.cnf.i,
    value: props.cntnt.a
  }"
>
  <template v-if="props.cnf.s" v-slot="{ value }">
    <strong>{{ Math.ceil(value)}}%</strong>
  </template>
</v-progress-linear>
</template>
<script>
export default {

}
</script>
