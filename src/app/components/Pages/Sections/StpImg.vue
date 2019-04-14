<template functional>
<v-img
 fluid
 :height="props.h||'100%'"
 :src="props.i"
 :gradient="props.gr||'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'"
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
</v-img>
</template>

<script>
export default {


}
</script>
