<template functional>
<v-container v-if="props.$children" :class="props.cc">
      <v-layout :class="props.lc||'row wrap justify-center'">
        <StChildrenHelper :children="props.$children" wrapper="v-flex" ></StChildrenHelper>
      </v-layout>
    </v-container>
</template>
<script>
export default {

}

/**
<v-flex :class="block.$bf?   (props.$bf||'')+' '+block.$bf: (props.$bf||'')"    v-for="(block, index) in props.$children" :key="index">
  bind
  <component  :is="block._n" v-bind="block._props"  > </component>
</v-flex>
*/
</script>
