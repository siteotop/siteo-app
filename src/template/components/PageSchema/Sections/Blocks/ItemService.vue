<template functional>
  <v-container class="white">
  <v-layout row wrap>
    <v-flex xs12 md1></v-flex>
    <v-flex xs12 md7>{{props.title}}   {{props.preview}}</v-flex>
    <v-flex xs12 md2>${{props.price}}</v-flex>
    <v-flex xs12 md2><AppAction  :large="false"></AppAction></v-flex>

  </v-layout>
</v-container>
</template>

<script>

import ServiceProps from '../_props/service.js';
export default {
    extends:ServiceProps
}
</script>
