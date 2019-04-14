<template functional>
<v-container
  fluid
  tag="section"
  :class="props.b"
>
 <v-container :class="props.cc" :style="{minHeight:props.h? props.h+'px': undefined}">
  <StpLay v-bind="props">
  </StpLay>
 </v-container>
</v-container>
</template>

<script>
export default {

}
</script>
