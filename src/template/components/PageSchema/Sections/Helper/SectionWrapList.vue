<template >
 <SectionWrap v-bind="sectionProps" >
   <v-container grid-list-md>
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
    <v-layout row wrap fill-height  >
     <v-flex d-flex sm6 md4 v-for="(item, i) in items"
      :key="i" >
      <slot v-bind:item="item" ></slot>
     </v-flex>
    </v-layout>
    <v-layout column wrap >
     <div class="text-xs-center">
      <v-pagination
          v-model="page"
         :length="6"
       ></v-pagination>
     </div>
    </v-layout>
  </v-container>
 </SectionWrap>
</template>

<script>
  import BaseProps from './base-props.js';
  export default {
    extends: BaseProps,
    props: {
       storeName: {
         type: String,
         default: ''
       }
    },

    data(){
      return  {
         page: 1,

      }
    },

    computed: {
       items() {
          if (this.storeName) {
            console.log(this.$store.state[this.storeName].items.objects)
              return this.$store.state[this.storeName].items.objects;
          } else {
            return [];
          }

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
