<template functional>
<v-navigation-drawer
 app
 fixed
 :disable-resize-watcher="true"
 :value="parent.$store.state.drawer"
 @input="(value)=>parent.$store.state.drawer = value"
 v-bind="{
   clipped: props.cnf.c,
   dark: props.cnf.d,
   light: props.cnf.l,
   disableResizeWatcher: props.cnf.ds,
   disableRouteWatcher: props.cnf.dr,
   fixed: props.cnf.f,
   floating: props.cnf.g,
   hideOverlay: props.cnf.h,
   miniVariant: props.cnf.m,
   miniVariantWidth: props.cnf.mw,
   mobileBreakPoint: props.cnf.mb,
   permanent: props.cnf.p,
   right: props.cnf.r,
   stateless: props.cnf.s,
   temporary: props.cnf.t,
   touchless: props.cnf.o,
   width: props.cnf.w
 }"
 >
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
