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
    }"
>
 <PLt v-bind="{cnf: {}, chldrn: props.chldrn }">
   <v-flex xs12 text-xs-center class="pa-1 "  >
    <v-btn target="_blank" :title="parent.$t('copyright', { template: 'siteo', url:'https://siteo.top'})" dark text href="https://siteo.top">
      <v-icon v-text="siteo"></v-icon>
      siteo.top
    </v-btn>
   </v-flex>
 </PLt>
</v-footer>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
