<template>
 <v-responsive :aspect-ratio="cnf.r||'1.7'">
    <iframe ref="iframe" title="video from youtube" width="100%" height="100%" :data-src="'https://www.youtube.com/embed/'+cntnt.v" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
    </iframe>
 </v-responsive>
</template>
<script>
export default {
  props: ['cnf', 'cntnt'],
  mounted() {
      if (document.readyState === 'complete') {
          this.onWindowLoad()
      } else {
        window.addEventListener("load", this.onWindowLoad);
      }

  },
  methods: {
    onWindowLoad() {

      var src= this.$refs['iframe'].getAttribute('data-src')
      this.$refs['iframe'].setAttribute('src', src);
    }
  }

}
</script>
