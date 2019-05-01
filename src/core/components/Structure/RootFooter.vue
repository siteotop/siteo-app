<template functional>
<v-footer
  app
  height="auto"
  v-bind="{
      absolute: props.cnf.a,
      inset: props.cnf.i,
      color: props.cnf.c||'primary darken-4',
      dark: props.cnf.d,
      light: props.cnf.l,
      fixed: props.cnf.f,
    }"
>
 <SpLay v-bind="props">
   <v-flex text-xs-center class="pa-1" >
    <v-btn target="_blank" :title="parent.$t('copyright', { template: 'siteo', url:'https://siteo.top'})" dark flat href="https://siteo.top"><AppIcon  name="si-logo-grey"></AppIcon>siteo.top </v-btn>
   </v-flex>
 </SpLay>
</v-footer>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
