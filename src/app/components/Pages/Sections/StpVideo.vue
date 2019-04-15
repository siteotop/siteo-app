<template functional>
 <v-responsive :aspect-ratio="props.r||'1.7'">
  <iframe width="100%" height="100%" :src="'https://www.youtube.com/embed/'+props.$data.v" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
  </iframe>
 </v-responsive>
</template>
<script>
export default {

}
</script>
