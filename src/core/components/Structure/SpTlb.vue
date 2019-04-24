<template functional>
<v-toolbar v-bind="props.cnf">
  <StChildrenHelper v-for="(element, index) in props.chldrn||[]"
    :element="element"
    :key="index"
  >
  </StChildrenHelper>
</v-toolbar>
</template>

<script>

/**
others toolbar
*/

export default {

}

</script>
