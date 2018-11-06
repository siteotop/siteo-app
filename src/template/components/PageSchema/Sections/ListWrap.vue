<template functional>
<SectionWrap v-bind="props">
    <slot v-if="props.header" name="header"></slot>

    <v-container :class="props.$bc">
      <v-layout :class="props.$bl"   >
        <v-flex :class="props.$bf"  v-for="(item, i) in props.items"
      :key="i" >
          <slot v-bind:item="item">
            <!-- Fallback component -->
            <component :is="props.$cl" v-bind="Object.assign( props.$clp, item)" > </component>
          </slot>

      </v-flex>
    </v-layout>
   </v-container>

  <slot v-if="pagination" name="pagination">
    <v-layout column wrap >
      <v-flex justify-center text-xs-center>
      <v-pagination
          v-model="page"
         :length="6"
       >
      </v-pagination>
    </v-flex>
   </v-layout>
 </slot>
</SectionWrap>
</template>

<script>
import BaseProps from './Helper/base-props.js';

export default {
   extends: BaseProps,
   props: {
     $cl: { // component list. component  which using in all $bls list (only this component)
       type: [Boolean, String],
       default: false
     },

     $clp: { // component list props.  if component has $cl will be use this
         type: Object,
         default: function () {return {};}
     },

     items: {
       type: Array,
       default: function () {
         return [];
       }
     }

   }
}


</script>
