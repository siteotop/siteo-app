<template functional>
<v-footer
  app
  height="auto"
  v-bind="{
      absolute: props.cnf.a,
      inset: props.cnf.i,
      color: props.cnf.c,
      dark: props.cnf.d,
      light: props.cnf.l,
      fixed: props.cnf.f,
      padless: props.cnf.b,
      tile:props.cnf.g,
      elevation:props.cnf.e,
    }"
>
  <StChildrenHelper
     :element="props.chldrn"
     :list="true">
  </StChildrenHelper>
  <!--  -->

</v-footer>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
