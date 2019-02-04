<template functional>
  <v-hover v-if="!props.$vl">
    <v-card
       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
          <v-img v-if="props._m"
            aspect-ratio="1.61"
            class="white--text"
            :src="props._m"
          >
          </v-img>
          <v-card-title  class="headline">
             {{props._t}}
          </v-card-title>
          <v-card-text>
            {{props._d}}
          </v-card-text>
          <v-card-actions>
            <v-btn :to="props._u">{{parent.$t('rm')}}</v-btn>
          </v-card-actions>
        </v-card>
  </v-hover>
  <b-horizontal v-else  v-bind="props">
    <template slot="image" slot-scope="name">
      <v-img
         aspect-ratio="1"
        :src="props._m"
        :alt="props._t"
      ></v-img>
    </template>
    <template slot="action" slot-scope="name">
      <v-card-actions>
        <v-btn :to="props._u">{{parent.$t('rm')}}</v-btn>
      </v-card-actions>
    </template>
  </b-horizontal>
</template>

<script>
//import BTitleProps from './_extends/b-title-props.js';

export default {
  // extends: BTitleProps,

  
}
</script>
