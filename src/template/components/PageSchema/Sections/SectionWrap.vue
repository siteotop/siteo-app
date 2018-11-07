<template functional>
  <component :is="props.$co||'v-container'" :id="props._$" fluid  v-bind="{'v-container': { tag: 'section'}, 'v-img':{height:props.$he, src: props._p, gradient: props.$gr  }, 'v-parallax':{height:props.$he, alt:props._t, src: props._p}}[props.$co]" :class="props.$tc+(parent.$vuetify.breakpoint.smAndDown? ' pa-1': '' )" >
    <v-layout  column  v-if="props._t||props._d" :class="props.$tl">
      <v-flex>
        <component :is="'h'+props.$ht" v-if="props._t" :class="props.$_t+  (parent.$vuetify.breakpoint.smAndDown?' display-1': '' )">{{props._t}}</component>
        <span v-if="props._d" :class="props.$_d+(parent.$vuetify.breakpoint.smAndDown?' subheading': '' )">
          {{props._d}}
        </span>
      </v-flex>
  </v-layout>
  <v-layout >
    <v-flex>
      <slot></slot>
      <v-container v-if="props.$bls!==false" :class="props.$bc">
        <v-layout :class="props.$bl">
          <v-flex :class="block.$bf?   props.$bf+' '+block.$bf: props.$bf"    v-for="(block, index) in props.$bls" :key="index">
            <component  :is="block._n" v-bind="block._props" > </component>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>

</component>
</template>

<script>

import BaseProps from './Helper/base-props.js';


export default {
  extends: BaseProps,


}


</script>
