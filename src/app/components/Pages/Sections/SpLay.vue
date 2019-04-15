<template functional>
<v-layout :class="props.cnf.lc">
  <component
    :is="props.cnf.e||'v-flex'"
    :class="props.cnf.fc" v-for="(element, index) in props.chldrn||[]"
    :key="index"
  >
    <StChildrenHelper :element="element">
    </StChildrenHelper>
  </component>
</v-layout>
</template>

<script>
export default {

}
</script>
