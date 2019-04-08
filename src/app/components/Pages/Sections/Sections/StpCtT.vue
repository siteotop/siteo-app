<template functional>
<v-layout
    column
    :class="props.cc||'justify-center text-xs-center pt-5 pb-4'">
  <v-flex>
    <v-container>
      <component
         v-if="props.$data.t"
         :is="(props.tt||'h2')"
         :class="(parent.$root.mobile? props.tc: props.tcm||props.tc) ">
         {{props.$data.t}}
      </component>
      <span v-if="props.$data.d" :class="(parent.$root.mobile? props.dc: props.dcm||props.dc) ">
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
