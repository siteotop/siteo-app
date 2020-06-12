<template functional>
  <component
    :is="props.cnf.h||'h2'"
    :class="data.class"
    v-bind="data.attrs"  
    >{{props.cntnt.t}}</component>
</template>
<script>
export default {

}
</script>
