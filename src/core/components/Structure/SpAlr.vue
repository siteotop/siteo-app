<template functional>
<v-alert
    :value="true"
    v-bind="{
      color: props.cnf.c,
      outline: props.cnf.o,
      icon: props.cntnt.i,
      type: props.cnf.t,
    }"
    :class="data.class"
>
    {{props.cntnt.d}}
  </v-alert>
</template>
<script>
export default {

}
</script>
