<template functional>
  <v-card flat color="transparent">
      <v-img  aspect-ratio="1" :src="props._me"></v-img>
  </v-card>
</template>

<script>

  export default {

    props: {
      // media
      _me: {
        type: String,
        default: '',
      },
    },
  }

</script>
