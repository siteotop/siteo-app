<template functional>
 <SectionWrap v-bind="props">
  <v-container >
   <v-layout  justify-center>
     <v-flex md9 >
          <v-card flat class="transparent" >
            <v-card-text style="text-align:justify;" class="subheading" v-html="props._te"></v-card-text>
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
      // text
      _te: {
        type: String,
        default: '', //  text
      },
  },
    //name: 'section-text',
  }
</script>
