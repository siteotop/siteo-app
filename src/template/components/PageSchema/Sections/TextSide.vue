<template functional>
<SectionWrap v-bind="props">
  <v-container >
   <v-layout row reverse>
     <v-flex md6>
          <v-card flat>
            <v-card-text class="subheading" v-html="props._te"></v-card-text>
          </v-card>
      </v-flex>
      <v-flex md6>
            {{props._me}}
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
        default: '', //  Action Text
      },
      // media
      _me: {
        type: String,
        default: '', //'Action Href'
      }
    },
    //name: 'section-text',
  }
</script>
