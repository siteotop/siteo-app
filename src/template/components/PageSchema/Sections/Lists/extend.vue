<template>
<SectionWrap >
   <v-container grid-list-md>
    <slot name="header"><v-layout  wrap class="mb-4">
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
    <v-layout row wrap fill-height  >
     <v-flex d-flex sm6 md4 v-for="(item, i) in items"
      :key="i" >
          <CardService v-bind="item"></CardService>
     </v-flex>
    </v-layout>
    <slot name="pagination">
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


export default {

      //mixins: [LoaderStoreModule],

      data(){
        return  {
           page: 1,

        }
      },

      computed: {
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
