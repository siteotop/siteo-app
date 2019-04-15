<template functional>
<v-img
 fluid
 :height="props.h||'100%'"
 :src="props.i"
 :gradient="props.gr||'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
 :class="props.b"
>
<v-container :class="props.cc" :style="{height:props.h? props.h+'px': undefined}">
  <SpLay v-bind="props">
  </SpLay>
</v-container>
</v-img>
</template>

<script>
export default {


}
</script>
