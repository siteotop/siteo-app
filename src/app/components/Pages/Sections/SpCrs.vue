<template functional>
 <v-carousel>
    <v-carousel-item
      v-for="(element, index) in props.$children||[]"
      :key="index"
      :src="element._d.i"
    >
    <SpLay v-bind="{...element._p||{}, $children:element._ch}">
    </SpLay>
  </v-carousel-item>
 </v-carousel>
</template>

<script>
export default {

}
</script>
