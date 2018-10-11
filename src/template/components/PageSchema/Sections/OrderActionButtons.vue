<template functional>
  <SectionWrap v-bind="props" >
      <v-container :class="parent.$vuetify.breakpoint.xs?'mx-0 px-0':'py-1 my-1'">
        <v-layout  justify-center class="">
             <v-flex xs12 sm8 md6 text-xs-center>
             <AppActionsList :block="props.block" :active="props.typeAction"></AppActionsList>
           </v-flex >
       </v-layout>
    </v-container>
  </SectionWrap>
</template>
<script>
import BaseProps from './Helper/base-props.js';
export default {
  extends: BaseProps,

  props: {
    typeAction: {
      type: String,
      default: ''
    },
    block: {
      type: Boolean,
      default: false
    }
  }


}


</script>
