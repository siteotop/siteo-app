<template functional>
<SectionWrap v-bind="props" >
  <v-container >
   <v-layout row wrap justify-center >
     <v-flex xs12 md8>
       <v-card >

         <v-list subheader>
         <v-subheader>{{props._ti}}</v-subheader>
         <v-list-tile
           v-for="(item, i) in props._li"
           :key="i"
           avatar
           tag="li"
           @click=""
         >
           <v-list-tile-avatar>
              {{(i+1)}}
           </v-list-tile-avatar>

           <v-list-tile-content>
             <v-list-tile-title >{{item._t}}</v-list-tile-title>
             <v-list-tile-sub-title>{{item._d}}</v-list-tile-sub-title>
           </v-list-tile-content>

           <v-list-tile-action>
             <v-checkbox color="primary" value="1"></v-checkbox>
           </v-list-tile-action>
         </v-list-tile>
       </v-list>

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
      _li: {
        type: Array,
        default: function() {
          return [];
        },
      },
      // media
      _me: {
        type: String,
        default: '',
      },


    },
    //name: 'section-text',
  }
</script>
