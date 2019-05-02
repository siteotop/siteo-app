<template functional>
<v-tabs
  v-bind="{
    alignWithTitle: props.cnf.a,
    right: props.cnf.r,
    centered: props.cnf.c,
    color: props.cnf.o,
    dark: props.cnf.d,
    light: props.cnf.l,
    fixedTabs: props.cnf.f,
    grow: props.cnf.g,
    hideSlider: props.cnf.s,
    iconsAndText: props.cnf.i,
    //mobileBreakPoint: 'readyPropBoolean',
    showArrows: props.cnf.h,
    sliderColor: props.cnf.w

    }"
  :class="data.class"
>
  <v-tab
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    ripple
  >
    {{element._d?element._d.t:''}}
  </v-tab>
  <v-tab-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element._p?{
        transition: element._p.a,
        reverseTransition: element._p.b
      }:{}"
  >
  <PLt v-if="element._ch" v-bind="{cnf: element._p||{}, chldrn:element._ch}">
  </PLt>
  </v-tab-item>
</v-tabs>
</template>

<script>
export default {

}
</script>
