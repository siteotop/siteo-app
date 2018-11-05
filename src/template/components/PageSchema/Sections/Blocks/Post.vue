<template functional>
  <v-hover>
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
            <v-btn :to="props._u">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
</template>

<script>
import BTitleProps from './_extends/b-title-props.js';

export default {
   extends: BTitleProps,

   props: {
     _u: {
       type: String,

     }
   }
}
</script>
