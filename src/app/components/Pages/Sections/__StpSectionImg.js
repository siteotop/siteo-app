<template functional>
  <component :is="props.$co||'v-container'" :id="props._$" fluid  v-bind="{'v-container': { tag: 'section'}, 'v-img':{height:props.$he||600, src: props._p, gradient: props.$gr||'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'  }, 'v-parallax':{height:props.$he, alt:props._d.t, src: props._p}}[props.$co]"  :class="(props.$tc||'')+(parent.$root.mobile? (props.$tcm||' px-1'): '' )" >



</component>
</template>
