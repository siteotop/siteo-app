<template functional>
<SectionWrap v-bind="props">
  <v-container grid-list-md>
   <v-layout row wrap justify-center >
    <v-flex  md8 v-for="(item, i) in props._li"
     :key="i"  >
      <v-card  >
          <v-img
            aspect-ratio="1.77"
            class="white--text"

            :src="item._i"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                   <span class="headline"><v-avatar color="primary">{{(i+1)}}</v-avatar> {{item._t}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title v-if="item._s">
            <span class="grey--text">{{item._s}}</span>
          </v-card-title>
          <v-card-text>
            {{item._d}}
          </v-card-text>
        </v-card>
   </v-flex>
  </v-layout>
 </v-container>
</SectionWrap>
</template>

<script>
  import BaseProps from './Helper/base-props.js';
  export default {
    extends: BaseProps,
    props: {
      _li: {
        type: Array,
        default: function() {
          return [];
        },

      }
    }
}
</script>
