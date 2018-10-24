<template >
  <div>
  </div>
</template>

<script>
export default {
  props: {
    _url: {
      type: String,
      default: 'http://instagr.am/p/fA9uwTtkSN/'
    }
  },

  created() {

      var url ='https://api.instagram.com/oembed?url=' + this._url;

  }



}
</script>
