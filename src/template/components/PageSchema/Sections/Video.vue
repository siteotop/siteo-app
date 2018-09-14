<template functional>
 <SectionWrap v-bind="props">
  <v-container v-if="props._vi" >
    <v-layout justify-center>
     <v-flex md9>
      <v-responsive aspect-ratio="1.77">
        <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/'+props._vi" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </v-responsive>
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
      _vi: {
        type: String,
        default: ''
      }
    }
    //name: 'section-text',
  }
</script>
