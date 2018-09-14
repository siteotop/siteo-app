<template functional>
  <SectionWrap v-bind="props">
    <v-layout column align-center>
    <transition name="fade" appear>
     <AppAction></AppAction>
    </transition>
   </v-layout>
  </SectionWrap>
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
