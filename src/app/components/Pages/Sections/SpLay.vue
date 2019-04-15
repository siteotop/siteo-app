<template functional>
<v-layout :class="props.lc">
  <component
    :is="props.e||'v-flex'"
    :class="props.fc" v-for="(element, index) in props.$children||[]"
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
