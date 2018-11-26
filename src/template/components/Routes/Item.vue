<template functional>
<component :is="$options.components[props.objectComponent]" :objectId="props.objectId"> </component>
</template>

<script>
import OneService from '../Item/OneService.vue';

export default {
  components: {
      OneService
  },
  props: {
     objectComponent: {
       type: String,
       default: 'OneServices'
     },
     objectId: {
       type: String,
       default: ''
     }
  }

}
</script>
