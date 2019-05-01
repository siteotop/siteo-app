<template functional>
<v-container
  fluid
  tag="section"
  :class="props.cnf.b"
>
 <v-container :class="props.cnf.c" :style="{minHeight:props.cnf.h? props.cnf.h+'px': undefined}">
  <SpLay v-bind="props">
  </SpLay>
 </v-container>
</v-container>
</template>

<script>
export default {

}
</script>
