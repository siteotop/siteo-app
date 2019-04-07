<template functional>
  <v-layout
    column
    :class="data.class||'justify-center text-xs-center pt-5 pb-4'">
    <v-flex>
      <v-container>
      <component
         v-if="props.$data.t"
         :is="'h'+(props.$ht||2)"
         :class="(props.$_t||'display-1')+  (parent.$root.mobile?' display-1': '' )">{{props.$data.t}}
      </component>
      <span v-if="props.$data.d" :class="(props.$_d||'title font-weight-medium')+(parent.$root.mobile?' subheading': '' )">
        {{props.$data.d}}
      </span>
    </v-container>
    </v-flex>

</v-layout>
</template>

<script>
export default  {


}
</script>
