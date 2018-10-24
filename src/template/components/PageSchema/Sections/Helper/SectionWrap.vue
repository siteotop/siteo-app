<template functional>
  <v-container  :id="props._id" fluid tag="section" :class=" (parent.$vuetify.breakpoint.smAndDown? props._bc+' pa-1': props._bc )" >
    <v-layout column  v-if="props._ti||props._de">
      <v-flex>
        <v-container class="py-0 my-0">
          <v-layout justify-center>
              <v-flex  xs12  class="my-4 text-xs-center" >
                <h2 v-if="props._ti" :class="(parent.$vuetify.breakpoint.smAndDown?'display-1': 'display-2' )+' secondary--text'">{{props._ti}}</h2>
                <h3 class="display-1" v-if="!props._ti&&props._de">{{props._de}} </h3>
                <span v-if="props._ti&&props._de" class="subheading">
                  {{props._de}}
                </span>
              </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex>
      <v-container :class="props._cc">
          <v-layout :class="props._lc">
            <v-flex :class="block._fc?   props._fc+' '+block._fc: props._fc"    v-for="(block, index) in props._bls" :key="index">
                <component :is="block._n" v-bind="block._props" > </component>
            </v-flex>
            <slot></slot>
         </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>

import BaseProps from './base-props.js';

export default {
  extends: BaseProps,


}


</script>
