<template functional>
<v-toolbar app v-bind="{
    height: props.cnf.h,
    dark: props.cnf.d,
    clippedLeft: props.cnf.l,
    clippedRight: props.cnf.r,
    dense: props.cnf.e,
    color: props.cnf.c||'primary'

  }">
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
