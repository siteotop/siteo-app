<template functional>
  <v-container fluid  dark tag="section" class="primary text--secondary ">
   <v-layout column align-center>
          <h2 class="mb-2 display-1 text-xs-left">{{props._ti}}</h2>
          <div class="subheading mb-3 text-xs-center ">{{props._de}}</div>
    <transition name="fade" appear>
     <AppAction></AppAction>
    </transition>
   </v-layout>
  </v-container>
</template>

<script>
  import BaseProps from './Helper/base-props.js';
  export default {
    extends: BaseProps,
    props: {
      _at: {
        type: String,
        default: '', //  Action Text
      },
      _ah: {
        type: String,
        default: '', //'Action Href'
      }
    },
    //name: 'section-action',
  }
</script>
