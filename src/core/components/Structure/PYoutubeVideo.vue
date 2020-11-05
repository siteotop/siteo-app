<template>
  <v-card :loading="!loaded" loader-height="5">
    <v-toolbar v-if="cntnt.t">
       <v-icon left>$vuetify.icons.video</v-icon>
        <v-toolbar-title>
          {{cntnt.t}}
        </v-toolbar-title>
     <v-spacer></v-spacer>
      <v-btn v-if="cnf.closable" icon @click="cnf.closeEvent">
        <v-icon>
        $vuetify.icons.close
      </v-icon></v-btn>
    </v-toolbar>

 <v-responsive :aspect-ratio="cnf.r||'1.7'">
   <!-- https://developers.google.com/youtube/player_parameters?hl=ru -->
    <iframe
      ref="iframe"
      @load="loaded=true"
      width="100%"
      height="100%"
      frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen
      title="video from youtube"

      :data-src="'https://www.youtube.com/embed/'+clearVideoId+'?autoplay='+(cnf.a||'')+'&listType=user_uploads&rel=0&start='+start"
      >
    </iframe>
 </v-responsive>
 <v-card-actions>

       <v-btn
         tag="a"
         target="_blank"
         :href="youtubeLink"
         text
         color="primary accent-4"
       >
        <v-icon left>
          {{thumbUp}}
        </v-icon>  Like
       </v-btn>
       <v-spacer>
       </v-spacer>
       <v-btn
         text
         color="primary accent-4"
         @click="share=true"
       >
        <v-icon left>
           $vuetify.icons.share
        </v-icon>  {{$t('share')}}
       </v-btn>
       <ShareWindow
         v-if="share"
         :link="youtubeLink"
         :title="'Youtube link'"
         @close="share=false"
        >
       </ShareWindow>
</v-card-actions>
</v-card>
</template>
<script>

import {
     mdiThumbUpOutline

 } from '@mdi/js'

export default {
  props: ['cnf', 'cntnt'],

  data() {
    return {
      clearVideoId: '',
      start: '',
      share: false,
      loaded: false,
      thumbUp: mdiThumbUpOutline
    }
  },

  mounted() {
      if (document.readyState === 'complete') {
          this.onWindowLoad()
      } else {
        window.addEventListener("load", this.onWindowLoad);
      }

  },

  created() {
    var id = this.cntnt.v.match(new RegExp("([^&?]+)?|&?"));
     if (id&&id[1]) {
       this.clearVideoId =id[1];
     }   else {

     }
    var time =   this.cntnt.v.match(new RegExp("t=([0-9]+)"));
    //time example ["t=23", "23", index: 0, input: "t=23", groups: undefined]
    if (time&& time[1]) {
       this.start = time[1]
    }

  },

  methods: {
    onWindowLoad() {

      var src= this.$refs['iframe'].getAttribute('data-src')
      this.$refs['iframe'].setAttribute('src', src);
    }
  },

  computed: {

    youtubeLink() {
      return 'https://youtube.com/watch?v='+this.clearVideoId;
    },

  }


}
</script>
