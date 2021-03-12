<template>
<v-lazy v-model="isActive">
  <v-card :loading="onLoad"  v-if="clearVideoId" loader-height="5">
    <v-toolbar v-if="cntnt.t">
       <v-icon left>$vuetify.icons.video</v-icon>
        <v-toolbar-title>
          {{cntnt.t}}
        </v-toolbar-title>
     <v-spacer></v-spacer>
     <template
      v-if="cnf.closable"
     >
       <v-btn
         v-if="cntnt.to"
         color="primary"
         :to="cntnt.to"
         >
         {{cntnt.totext}}
       </v-btn>
       <v-btn

         icon
         @click="cnf.closeEvent">
         <v-icon>
         $vuetify.icons.close
         </v-icon>
       </v-btn>
     </template>

    </v-toolbar>

 <v-responsive :aspect-ratio="cnf.r||'1.7'">
   <!-- https://developers.google.com/youtube/player_parameters?hl=ru -->
    <iframe
      ref="iframe"
      width="100%"
      height="100%"
      @load="onLoad=false"
      frameborder="0"
      allow="autoplay; encrypted-media" allowfullscreen
      title="video from youtube"

      :src="'https://www.youtube.com/embed/'+clearVideoId+'?autoplay='+(cnf.a||'')+'&listType=user_uploads&rel=0&start='+start"
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
</v-lazy>
</template>
<script>
//PYoutubeVideo
import {
     mdiThumbUpOutline

 } from '@mdi/js'

export default {
  props: ['cnf', 'cntnt'],

  data() {
    return {
      isActive: false,
      clearVideoId: '',
      youtubeLink: '',
      start: '',
      onLoad: true,
      share: false,
      thumbUp: mdiThumbUpOutline
    }
  },

  watch:  {
    isActive( newValue, oldValue) {
        if (newValue) {
          this.createId();
        }
    }
  },

   methods: {
     createId() {
       var id = this.cntnt.v.match(new RegExp("([^&?]+)?|&?"));
        if (id&&id[1]) {
          this.clearVideoId =id[1];
        }

        var time =   this.cntnt.v.match(new RegExp("t=([0-9]+)"));

        //time example ["t=23", "23", index: 0, input: "t=23", groups: undefined]
        if (time&& time[1]) {
          this.start = time[1]
        }

        // convert time 00:00 to seconds
        if (this.cntnt.tc) {
          var time  = this.cntnt.tc.split(':');
          if (time.length==2) {
             this.start = parseInt(time[0])*60 +  parseInt(time[1]);
          }
        }
        this.youtubeLink = 'https://youtube.com/watch?v='+this.clearVideoId;
     },
   }

}
</script>
