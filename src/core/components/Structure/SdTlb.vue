<template functional>
<v-toolbar app v-bind="props.cnf">
  <StChildrenHelper v-for="(element, index) in props.chldrn||[]"
    :element="element"
    :key="index"
  >
  </StChildrenHelper>
</v-toolbar>
</template>

<script>

/**
Main App toolbar
Top Bar Menu in APP, where is logo, site name, and top menu
*/

export default {

}

</script>
