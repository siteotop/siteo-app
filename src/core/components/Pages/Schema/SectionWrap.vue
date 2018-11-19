<template functional>
  <component :is="props.$co||'v-container'" :id="props._$" fluid  v-bind="{'v-container': { tag: 'section'}, 'v-img':{height:props.$he||600, src: props._p, gradient: props.$gr  }, 'v-parallax':{height:props.$he, alt:props._t, src: props._p}}[props.$co]" :class="props.$tc+(parent.$vuetify.breakpoint.smAndDown? ' pa-1': '' )" >
    <v-layout
      v-if="props._t||props._d"
      column
      :class="props.$tl||'justify-center text-xs-center pt-5 pb-4'">
      <v-flex>
        <v-container>
        <component
           v-if="props._t"
           :is="'h'+(props.$ht||2)"
           :class="(props.$_t||'display-1 secondary--text')+  (parent.$vuetify.breakpoint.smAndDown?' display-1': '' )">{{props._t}}</component>
        <span v-if="props._d" :class="(props.$_d||'title font-weight-medium')+(parent.$vuetify.breakpoint.smAndDown?' subheading': '' )">
          {{props._d}}
        </span>
      </v-container>
      </v-flex>

  </v-layout>
  <v-layout >
    <v-flex>
      <slot></slot>
      <v-container v-if="props.$bls!==false" :class="props.$bc||'grid-list-md'">
        <v-layout :class="props.$bl||'row wrap justify-center'">
          <v-flex :class="block.$bf?   props.$bf+' '+block.$bf: props.$bf"    v-for="(block, index) in props.$bls" :key="index">
            <component  :is="block._n" v-bind="block._props" > </component>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>

</component>
</template>

<script>

export default {


}


</script>
