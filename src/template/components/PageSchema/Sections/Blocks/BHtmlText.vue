<template functional>
<v-card flat class="transparent" >
  <v-card-text style="text-align:justify;" class="subheading" v-html="props._te"></v-card-text>
</v-card>
</template>

<script>

export default {

  props: {
    // text
    _te: {
      type: String,
      default: '', //  text
     }
  }
}

</script>
