<template functional>
<v-parallax
 fluid
 :height="props.h||'100%'"
 :src="props.i"
 :class="props.b"
>
<v-container :class="props.cc" :style="{height:props.h? props.h+'px': undefined}">
  <StpLay v-bind="props">
  </StpLay>
</v-container>
</v-parallax>
</template>
<script>
export default {

}
</script>
