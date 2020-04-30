<template functional>
<v-lazy min-height="300">
 <v-responsive :aspect-ratio="props.cnf.r||'1.7'">
    <iframe title="video from youtube" width="100%" height="100%" :src="'https://www.youtube.com/embed/'+props.cntnt.v" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
 </v-responsive>
</v-lazy>
</template>
<script>
export default {

}
</script>
