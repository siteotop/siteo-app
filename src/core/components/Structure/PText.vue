<template functional>
<component v-if="props.cntnt.a" :is="props.cnf.a||'div'" :class="data.class">
  {{parent.$store.state.appInstance.objectActive[props.cntnt.a]}}
</component>
<component v-else :is="props.cnf.a||'div'" :class="data.class">
  {{props.cntnt.t}}
</component>
</template>
<script>
export default {

}
</script>
