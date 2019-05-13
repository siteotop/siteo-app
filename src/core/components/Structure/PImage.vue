<template functional>
<v-img
 fluid
 :height="props.cnf.h||'100%'"
 :src="props.cntnt.i"
 :gradient="props.cnf.gr||'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
 :class="props.cnf.b"
>
<v-container :class="props.cnf.cc" :style="{height:props.cnf.h? props.cnf.h+'px': undefined}">
  <PLt v-bind="props">
  </PLt>
</v-container>
</v-img>
</template>

<script>
export default {


}
</script>
