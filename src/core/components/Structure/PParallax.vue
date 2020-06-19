<template functional>
<v-parallax
 :height="props.cnf.h"
 :alt="props.cntnt.a"
 :src="props.cntnt.i"
 :class="props.cnf.b"
>

  <StChildrenHelper
     :element="props.chldrn"
     :list="true">
  </StChildrenHelper>

</v-parallax>
</template>
<script>
export default {

}
</script>
