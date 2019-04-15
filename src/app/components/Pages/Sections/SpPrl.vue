<template functional>
<v-parallax
 fluid
 :height="props.h||'100%'"
 :src="props.i"
 :class="props.b"
>
<v-container :class="props.cc" :style="{height:props.h? props.h+'px': undefined}">
  <SpLay v-bind="props">
  </SpLay>
</v-container>
</v-parallax>
</template>
<script>
export default {

}
</script>
