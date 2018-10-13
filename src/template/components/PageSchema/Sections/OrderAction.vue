<template functional>
<SectionWrap v-bind="props" class="mt-0">
    <v-container  :class="parent.$vuetify.breakpoint.xs?'px-1':'py-1 my-1'">
     <v-layout  justify-center>
        <v-flex xs12 sm8 md6 text-xs-center >
          <component :vList="props.vList" :is="'app-action-'+props.typeAction"></component>
        </v-flex md9 >
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
      default: 'order'
    },

    vList: {
      type: Boolean,
      default: false
    }
  }

}

</script>
