<template functional>
 <v-container :class="props.cnf.c" :style="{minHeight:props.cnf.h? props.cnf.h+'px': undefined}">
  <PLt v-bind="props">
  </PLt>
 </v-container>
</template>

<script>
export default {

}
</script>
