<template >
   <v-responsive aspect-ratio="1">
      <iframe :src="'https://www.facebook.com/plugins/post.php?href='+url()+'&width=500'" width="500" height="530" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
   </v-responsive>
</template>
<script>

/**
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10212336436156918%26set%3Da.10212073741349712%26type%3D3&width=500" width="500" height="530" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
*/

  export default {
    props: {
      _url: {
        type: String,
        default: ''
      }
    },

    methods: {
       url() {
         return encodeURIComponent(this._url);
       }
    }
    //name: 'section-text',
  }
</script>
