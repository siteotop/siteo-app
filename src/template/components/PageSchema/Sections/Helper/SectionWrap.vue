<template functional>
  <v-container  :id="props._id" fluid tag="section" :class=" (parent.$vuetify.breakpoint.smAndDown? props._bc+' pa-1': props._bc )" >
    <v-layout
      column
    >
      <v-flex v-if="props._ti||props._de" xs12 sm4 class="my-4 ">
        <v-container>
        <div class="text-xs-center">
          <h2 v-if="props._ti" :class="(parent.$vuetify.breakpoint.smAndDown?'display-1': 'display-2' )+' secondary--text'">{{props._ti}}</h2>
          <h3 class="display-1" v-if="!props._ti&&props._de">{{props._de}} </h3>
          <span v-if="props._ti&&props._de" class="subheading">
            {{props._de}}
          </span>
        </div>
       </v-container>
      </v-flex>
      <v-flex xs12>
        <slot></slot>
      </v-flex>
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
