<template functional>
<StpSection v-bind="props">
    <slot v-if="props.header" name="header"></slot>

    <v-container :class="props.$bc||'grid-list-md'">
      <v-layout :class="props.$bl||'row wrap justify-center'"   >
        <v-flex :class="props.$bf||'xs12 sm12 md12'"  v-for="(item, i) in props.items"
      :key="i" >
          <slot v-bind:item="item">
            <!-- Fallback component -->
            <component :is="props.$cl" v-bind="Object.assign( props.$clp||{}, item)" > </component>
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
</StpSection>
</template>

<script>
export default {

}


</script>
