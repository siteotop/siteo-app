<template functional>
  <section :class="props._bc" class="pb-4">
    <v-layout
      column
      wrap
      align-center
    >
      <v-flex xs12 sm4 class="my-4">
        <div class="text-xs-center">
          <h2 class="display-1">{{props._ti}}</h2>
          <span class="subheading">
            {{props._de}}
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <slot></slot>
      </v-flex>
    </v-flex>
  </v-layout>
</section>
</template>

<script>

import BaseProps from './base-props.js';
export default {
    props: BaseProps.props

}


</script>
