<template functional>
<v-card :class="props.cnf.cc">
  <component
    :is="props.cnf.e||'v-card-text'"
    :class="props.cnf.fc" v-for="(element, index) in props.chldrn||[]"
    :key="index"
  >
    <StChildrenHelper :element="element">
    </StChildrenHelper>
  </component>
</v-card>
</template>
<script>
export default {

}
</script>
