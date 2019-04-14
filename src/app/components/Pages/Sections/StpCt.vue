<template functional>
<v-container
  fluid
  tag="section"
  :class="props.b"
>
 <v-container :class="props.cc" :style="{minHeight:props.h? props.h+'px': undefined}">
  <v-layout :class="props.lc">
    <component
      :is="props.e||'v-flex'"
      :class="props.fc" v-for="(element, index) in props.$children||[]"
      :key="index"
    >
      <StChildrenHelper :element="element">
      </StChildrenHelper>
    </component>
  </v-layout>
 </v-container>
</v-container>
</template>

<script>
export default {

}
</script>
