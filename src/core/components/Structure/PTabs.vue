<template functional>
<v-tabs
  v-bind="{
    alignWithTitle: props.cnf.a,
    right: props.cnf.r,
    centered: props.cnf.c,

    backgroundColor: props.cnf.b,
    color: props.cnf.o,
    dark: props.cnf.d,
    light: props.cnf.l,
    fixedTabs: props.cnf.f,
    grow: props.cnf.g,
    height: props.cnf.e,
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
    <!-- _data  in element.d-->
    {{element.d?element.d.t:''}}
  </v-tab>
  <!-- _props  in element.p-->
  <v-tab-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element.p?{
        transition: element.p.a,
        reverseTransition: element.p.b
      }:{}"
  >
    <template
      v-for="(elmt, index) in element._ch||[]"
     >
       <StChildrenHelper :element="elmt">
       </StChildrenHelper>
    </template>
  </v-tab-item>
</v-tabs>
</template>

<script>
export default {

}
</script>
