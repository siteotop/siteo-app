<template functional>
<v-footer v-bind="props.cnf">
  <StChildrenHelper v-for="(element, index) in props.chldrn||[]"
    :element="element"
    :key="index"
  >
  </StChildrenHelper>
<SdCopy></SdCopy>
</v-footer>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
