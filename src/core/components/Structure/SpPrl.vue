<template functional>
<v-parallax
 fluid
 :height="props.cnf.h||'100%'"
 :src="props.cnf.i"
 :class="props.cnf.b"
>
<v-container :class="props.cnf.cc" :style="{height:props.cnf.h? props.cnf.h+'px': undefined}">
  <SpLay v-bind="props">
  </SpLay>
</v-container>
</v-parallax>
</template>
<script>
export default {

}
</script>
