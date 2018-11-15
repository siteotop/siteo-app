<template functional>
  <v-card flat color="transparent">
      <v-img  aspect-ratio="1" :src="props._m"></v-img>
  </v-card>
</template>

<script>
import BTitleProps from './_extends/b-title-props.js';
export default {
  extends: BTitleProps

}

</script>
