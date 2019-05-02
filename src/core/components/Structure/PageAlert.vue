<template functional>
<v-alert
    :value="true"
    v-bind="{
      color: props.cnf.c,
      outline: props.cnf.o,
      type: props.cnf.t,
      icon: props.cntnt.i,
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
