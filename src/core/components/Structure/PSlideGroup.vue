<template functional>
 <v-slide-group
    v-bind="{
      dark: props.cnf.a,
      light: props.cnf.b,
      max: props.cnf.c,
      mobileBreakPoint: props.cnf.d,
      showArrows: props.cnf.e,
     }"
    :class="data.class">
    <v-slide-item
      v-for="(element, i) in props.chldrn||[]"
      :key="i"
    >
      <!-- _children in element.h-->
      <StChildrenHelper
         :element="element.h"
         :list="true">
      </StChildrenHelper>
  </v-slide-item>
 </v-slide-group>
</template>

<script>
import Vue from 'vue';

Vue.component('VSlideGroup', ()=> import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VSlideGroup/VSlideGroup'));
export default {

}
</script>
