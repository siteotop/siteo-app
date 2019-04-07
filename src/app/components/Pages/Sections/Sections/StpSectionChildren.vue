<template functional>
<v-layout>
  <v-flex>
    <slot></slot>
    <v-container v-if="props._ch.length" :class="props._ch||'grid-list-md'">
      <v-layout :class="props.$bl||'row wrap justify-center'">
        <v-flex :class="block.$bf?   (props.$bf||'')+' '+block.$bf: (props.$bf||'')"    v-for="(block, index) in props._ch" :key="index">
          <component  :is="block._n" v-bind="block._props"  > </component>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</v-layout>
</template>

<script>
export default  {

}
</script>
