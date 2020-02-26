<template functional>
<v-parallax
 :height="props.cnf.h"
 :alt="props.cntnt.a"
 :src="props.cntnt.i"
 :class="props.cnf.b"
>

  <template
    v-for="(element, index) in props.chldrn||[]"
   >
     <StChildrenHelper :element="element">
     </StChildrenHelper>
  </template>

</v-parallax>
</template>
<script>
export default {

}
</script>
