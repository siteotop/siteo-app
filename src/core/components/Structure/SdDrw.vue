<template functional>
<v-navigation-drawer
  app
  fixed
  :disable-route-watcher="true"
  :disable-resize-watcher="true"
 :value="parent.$store.state.drawer"
 @input="(value)=>parent.$store.state.drawer = value">
  <StChildrenHelper v-for="(element, index) in props.chldrn||[]"
    :element="element"
    :key="index"
  >
  </StChildrenHelper>
</v-navigation-drawer>
</template>

<script>
/**
  Left Menu for websites like in app
*/

export default {

}
</script>
