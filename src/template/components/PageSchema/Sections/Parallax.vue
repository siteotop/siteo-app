<template functional>
 <v-parallax :src="props._bi" :height="props._he">
  <SectionWrap v-bind="props">
    
  </SectionWrap>
 </v-parallax>

</template>

<script>
import BaseProps from './Helper/base-props.js';
export default {
    extends: BaseProps,

    props: {
      _he: {
        type: Number,
        default: 300
      }
    }

}
</script>
