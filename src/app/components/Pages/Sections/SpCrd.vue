<template functional>
<v-card :class="props.cc">
  <component
    :is="props.e||'v-card-text'"
    :class="props.fc" v-for="(element, index) in props.$children||[]"
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
