<template>
<SectionWrap v-bind="$options.propsData">
   <v-container  :class="_cc">
    <slot v-if="header" name="header"></slot>
    <v-layout :class="_lc"   >
     <v-flex  :class="flexClass"  v-for="(item, i) in items"
      :key="i" >
        <component :is="componentName"   v-bind="item"></component>
      </v-flex>


    </v-layout>
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
  </v-container>
</SectionWrap>
</template>
<script>

import BaseProps from '../Helper/base-props.js';

export default {
    extends: BaseProps,

    props: {

      _lc: {  // layout class
        type:String,
        default: 'row wrap fill-height'
      },

      toogleComponent: {
        type: String,
        default: 'cards'
      },

      header: {
        type:Boolean,
        default: false
      },
      pagination: {
        type:Boolean,
        default: false
      },

      query: {
        type: String,
        drfault : ''
      }

    },

      //mixins: [LoaderStoreModule],

      data(){
        return  {
           page: 1,

        }
      },

      computed: {
        componentName () {
          return  'toogle-'+this.toogleComponent;
        },

        flexClass() {
          if (this.toogleComponent == 'list') {
            return '  xs12 ';
          } else {
            return 'd-flex xs12 sm6 ' + 'md4'
          }



        },

        items() {
            console.log(this.$store.state[this.$options.storeName].items.objects);
           return this.$store.state[this.$options.storeName].items.objects;
        }


      }


}

</script>
