<template functional>
  <component :is="['v-container', 'v-img', 'v-parallax'][props._co]||'v-container'" :id="props._id" fluid  v-bind="[{ tag: 'section'}, {height:props._he, src: props._bi, gradient: props._gr  },{height:props._he, src: props._bi} ][props._co]" :class="props._tc+(parent.$vuetify.breakpoint.smAndDown? ' pa-1': '' )" >
    <v-layout  column  v-if="props._ti||props._de" :class="props._tl">
      <v-flex>
        <component :is="'h'+props._hn" v-if="props._ti" :class="props._hc+  (parent.$vuetify.breakpoint.smAndDown?' display-1': '' )">{{props._ti}}</component>
        <span v-if="props._de" :class="props._dc+(parent.$vuetify.breakpoint.smAndDown?' subheading': '' )">
          {{props._de}}
        </span>
      </v-flex>
  </v-layout>
  <v-layout >
    <v-flex>
      <slot></slot>
      <v-container v-if="props._bls!==false" :class="props._cc">
          <v-layout :class="props._lc">
            <v-flex :class="block._fc?   props._fc+' '+block._fc: props._fc"    v-for="(block, index) in props._bls" :key="index">
                <component v-if="!props._cl" :is="block._n" v-bind="block._props" > </component>
                <component v-else :is="props._cl" v-bind="Object.assign( props._cl_props, block )" > </component>
            </v-flex>
         </v-layout>
      </v-container>
    </v-flex>
  </v-layout>

</component>
</template>

<script>

import BaseProps from './base-props.js';


export default {
  extends: BaseProps,


}


</script>
