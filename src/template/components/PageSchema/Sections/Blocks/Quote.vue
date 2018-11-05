<template functional>
<v-card class="elevation-0 transparent">
  <v-card-text class="text-xs-center" v-if="props._m">
      <v-avatar  :tile="props.$_mt" :size="props.$_ms"  >
        <img  :src="props._m" :alt="props._t">
      </v-avatar>
  </v-card-text>
  <v-card-text>
      <v-layout  >
        <v-flex v-if="!parent.$vuetify.breakpoint.xs"  class=" align-start grey--text">
            <AppIcon scale="6" name="si-quote"></AppIcon>
        </v-flex>
        <v-flex :class="props.$_d||'headline font-weight-thin font-italic'">
          {{props._d}}
        <v-divider></v-divider>
        </v-flex>
      </v-layout>
  </v-card-text>
  <v-card-text :class="props.$b||'text-xs-right'">
    <strong :class="props.$_t||'title'">{{props._t}}</strong>
      <br>
      <em :class="props.$_s||'subheading'">{{props._s}}</em>
  </v-card-text>
</v-card>
</template>

<script>

import BTitleProps from './_extends/b-title-props.js';

export default {
  extends: BTitleProps,
  props: {
    $b: {
      type: String
    }
  }
}
</script>
