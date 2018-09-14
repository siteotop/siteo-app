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
  //  name: 'section-action'
    props: {
      _he: {
        type: Number,
        default: 300
      }
    }

}
/**
<v-layout column align-center justify-center>
  <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
  <transition name="bounce" appear>   <em>Kick-start your application today</em> </transition>
  <v-btn
    class="blue lighten-2 mt-5"
    dark
    large
    href="/pre-made-themes"
  >
    Get Started
  </v-btn>
</v-layout>
*/

</script>
