<template functional>
  <v-img
    :src="props._bi"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="600" class="primary">
    <v-layout column align-center fill-height>
      <v-spacer></v-spacer>
      <h1 :class="'white--text '+(!parent.$vuetify.breakpoint.smAndDown? 'display-4 ':'display-1')">{{props._ti}}</h1>
      <div class="ma-2 display-1 white--text">{{props._de}}</div>
      <transition name="fade" appear>
       <AppAction class="ma-4"></AppAction>
      </transition>
      <v-spacer></v-spacer>
    </v-layout>
  </v-img>
</template>

<script>
  import BaseProps from './Helper/base-props.js';
  export default {
    extends: BaseProps,

  }
</script>
