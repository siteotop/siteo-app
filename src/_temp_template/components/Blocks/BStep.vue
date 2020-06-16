<template functional>
  <v-card>
      <v-img
        aspect-ratio="1.77"
        class="white--text"
        :src="props._m"
        :alt="props._t"
      >
        <v-container fill-height fluid>
          <v-row >
            <v-col cols="12"  align="end">
               <span class="text-h5"><v-avatar color="primary">{{(i+1)}}</v-avatar> {{props._t}}</span>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <v-card-title v-if="props._s">
        <span class="grey--text">{{props._s}}</span>
      </v-card-title>
      <v-card-text>
        {{props._d}}
      </v-card-text>
    </v-card>
</template>
<script>
//import BTitleProps from './_extends/b-title-props.js';

export default {
  // extends: BTitleProps,

}

</script>
