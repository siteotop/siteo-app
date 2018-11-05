<template functional>
<v-card :class="props.$vc||'elevation-0 transparent'">
        <v-card-text  v-if="props._m">
          <v-avatar  :tile="props.$_mt" :size="props.$_ms"  >
            <img  :src="props._m" :alt="props._t">
          </v-avatar>
        </v-card-text>
        <v-card-text >
          <component :is="'h'+props.$ht"  :class="props.$_t||'display-3'">{{props._t}}</component>
        </v-card-text>
        <v-card-text :class="props.$_s||'title grey--text'" >
          {{props._s}}
        </v-card-text>
        <v-card-text  :class="props.$_d||'headline'" >
          {{props._d}}
        </v-card-text>
        <v-card-actions v-if="props.$ac">
            <component :is="props.$ac"> </component>
        </v-card-actions>
</v-card>
</template>


<script>

import BTitleProps from './_extends/b-title-props.js';

export default {
  extends: BTitleProps

}
</script>
