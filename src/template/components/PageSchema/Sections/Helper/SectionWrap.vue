<template functional>
  <component :is="props.$co||'v-container'" :id="props._id" fluid  v-bind="{'v-container': { tag: 'section'}, 'v-img':{height:props.$he, src: props._bi, gradient: props.$gr  }, 'v-parallax':{height:props.$he, src: props._bi}}[props.$co]" :class="props.$tc+(parent.$vuetify.breakpoint.smAndDown? ' pa-1': '' )" >
    <v-layout  column  v-if="props._ti||props._de" :class="props.$tl">
      <v-flex>
        <component :is="'h'+props.$ht" v-if="props._ti" :class="props.$_ti+  (parent.$vuetify.breakpoint.smAndDown?' display-1': '' )">{{props._ti}}</component>
        <span v-if="props._de" :class="props.$_de+(parent.$vuetify.breakpoint.smAndDown?' subheading': '' )">
          {{props._de}}
        </span>
      </v-flex>
  </v-layout>
  <v-layout >
    <v-flex>
      <slot></slot>
      <v-container v-if="props.$bls!==false" :class="props.$bc">
          <v-layout :class="props.$bl">
            <v-flex :class="block.$bf?   props.$bf+' '+block.$bf: props.$bf"    v-for="(block, index) in props.$bls" :key="index">
                <component v-if="!props.$cl" :is="block._n" v-bind="block._props" > </component>
                <component v-else :is="props.$cl" v-bind="Object.assign( props.$clp, block )" > </component>
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
