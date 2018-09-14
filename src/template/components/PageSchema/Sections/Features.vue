<template functional>
<SectionWrap v-bind="props">
  <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4 v-for="(item, i) in props._li" :key="i">
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">{{item._i}}</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">{{item._t}}</div>
                </v-card-title>
                <v-card-text class="text-xs-center" >
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
          default: function () {
            return [];
          }
        }
      },
      name: 'section-features'

  }
</script>
