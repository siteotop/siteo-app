<template functional>
<v-container grid-list-xl>
  <v-layout row wrap align-center>
    <v-flex xs6 sm4 md4 v-for="(item, i) in props._li" :key="i">
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
</template>


<script>
  export default {
      props: {
        _li: {
          type: Array,
          default: function () {
            return [];
          }
        }
      }
  }
</script>
