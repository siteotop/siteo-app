<template functional>
<v-sheet
  v-bind="{
    color: props.cnf.a,
    dark: props.cnf.b,
    elevation: props.cnf.c,
    height: props.cnf.d||'100%',
    light: props.cnf.e,
    tile: props.cnf.f,
    width: props.cnf.g,
  }"
>
<template v-for="(elmt, index) in props.chldrn||[]">
   <StChildrenHelper :element="elmt">
   </StChildrenHelper>
</template>
</v-sheet>
</template>
<script>
export default {

}
</script>
