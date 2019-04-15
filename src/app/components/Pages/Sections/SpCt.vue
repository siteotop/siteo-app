<template functional>
<v-container
  fluid
  tag="section"
  :class="props.b"
>
 <v-container :class="props.cc" :style="{minHeight:props.h? props.h+'px': undefined}">
  <SpLay v-bind="props">
  </SpLay>
 </v-container>
</v-container>
</template>

<script>
export default {

}
</script>
