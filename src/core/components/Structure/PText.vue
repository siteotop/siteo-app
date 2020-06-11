<template functional>
<component
  :is="props.cnf.a||'div'"
  :class="data.class"
  v-bind="data.attrs"
  >
  {{props.cntnt.a?
    parent.$store.state.appInstance.objectActive[props.cntnt.a]
    :props.cntnt.t}}
</component>
</template>
<script>
export default {

}
</script>
