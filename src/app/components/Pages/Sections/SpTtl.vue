<template functional>
  <component :is="props.h||'h2'" :class="data.class">{{props.$data.t}}</component>
</template>
<script>
export default {

}
</script>
