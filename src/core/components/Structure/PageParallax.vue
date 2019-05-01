<template functional>
<v-parallax
 fluid
 :height="props.cnf.h||'100%'"
 :src="props.cntnt.i"
 :class="props.cnf.b"
>
<v-container :class="props.cnf.cc" :style="{height:props.cnf.h? props.cnf.h+'px': undefined}">
  <PLt v-bind="props">
  </PLt>
</v-container>
</v-parallax>
</template>
<script>
export default {

}
</script>
