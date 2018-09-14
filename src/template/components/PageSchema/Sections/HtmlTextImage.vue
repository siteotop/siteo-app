<template functional>
<SectionWrap v-bind="props" >
  <v-container :class="parent.$vuetify.breakpoint.smAndDown? 'pa-0': ''" >
   <v-layout row wrap :reverse="props._re">
     <v-flex md6>
       <v-card flat >
            <v-card-text style="text-align:justify;" class="subheading" v-html="props._te"></v-card-text>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card flat>
          <v-card-text>
            <v-img :alt="props._ti" aspect-ratio="1.1" :src="props._me"></v-img>
          </v-card-text>
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
        default: '',
      },
      // media
      _me: {
        type: String,
        default: '',
      },
      // reverse
      _re: {
        type: Boolean,
        default: false,
      }


    },
    //name: 'section-text',
  }
</script>
