<template functional>
<v-parallax
 fluid
 :height="props.h||'100%'"
 :src="props.i"
 :class="props.b"
>
<v-container :class="props.cc" :style="{height:props.h? props.h+'px': undefined}">
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
</v-parallax>
</template>
<script>
export default {

}
</script>
