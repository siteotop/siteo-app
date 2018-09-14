<template functional>
<SectionWrap v-bind="props">
  <v-container>
   <v-layout  justify-center>
    <v-flex md10 >
    <v-expansion-panel expand :value="props._qa.map(_=>true)"> <!-- if need all opened value=props._qa.map(_=>true) -->
      <v-expansion-panel-content
       v-for="(item, i) in props._qa"
       :key="i"
      >
       <div  slot="header">
          <h3> <v-avatar color="primary lighten-1"><b>{{(i+1)}}</b></v-avatar> {{item._q}}</h3></div>
       <v-card>
         <v-card-text>{{item._a}}</v-card-text>
       </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
      _qa: {
        type: Array,
        default: function() {
          return [];
        },

      }
    },
    //name: 'section-action',
  }
</script>
