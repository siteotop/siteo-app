<template>
<SectionWrap v-bind="$options.propsData">
   <v-container  :class="_cc">
    <slot v-if="header" name="header">
      <v-layout  wrap class="mb-4">
      <v-toolbar flat>
           <v-btn   fab flat>
             <AppIcon name="si-filter"></AppIcon>
           </v-btn>
           <v-spacer></v-spacer>
           Hello filters
           <v-spacer></v-spacer>
            <v-btn   fab flat>
               <AppIcon name="si-sort"></AppIcon>
            </v-btn>
      </v-toolbar>
     </v-layout>
   </slot>
    <v-layout :class="_lc"   >
     <v-flex :class="flexClass"  v-for="(item, i) in items"
      :key="i" >
          <CardList v-bind="item"></CardList>
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

      _lc: {
        type:String,
        default: 'row wrap fill-height'
      },

      header: {
        type:Boolean,
        default: false
      },
      pagination: {
        type:Boolean,
        default: false
      }

    },

      //mixins: [LoaderStoreModule],

      data(){
        return  {
           page: 1,

        }
      },

      computed: {
        flexClass() {
            return 'd-flex xs12 sm6 ' + 'md4'

        },

        items() {
            console.log(this.$store.state[this.$options.storeName].items.objects);
           return this.$store.state[this.$options.storeName].items.objects;
        },

         sectionProps () {
          return {
            _ti: 'Services',
            _de: 'Description about service',

          }
         }
      }


}

</script>
