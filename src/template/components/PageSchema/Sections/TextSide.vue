<template functional>
<section class="white text--secondary ">
  <v-container dark tag="section" >
    <h2 class="mt-4 display-2 text-xs-center">{{props._ti}}</h2>
    <div class="title mb-4 text-xs-center ">{{props._de}}</div>
   <v-layout row reverse>
     <v-flex xs12 sm4 class="my-3">
       <div class="text-xs-center">
         <h2 class="headline">The best way to start developing</h2>
         <span class="subheading">
           Cras facilisis mi vitae nunc
         </span>
       </div>
     </v-flex>

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
</section>
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
