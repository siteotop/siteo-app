<template functional>
<v-container
  fluid
  tag="section"
  :class="props.cnf.b"
>
 <v-container :class="props.cnf.c" :style="{minHeight:props.cnf.h? props.cnf.h+'px': undefined}">
  <PLt v-bind="props">
  </PLt>
 </v-container>
</v-container>
</template>

<script>
export default {

}
</script>
