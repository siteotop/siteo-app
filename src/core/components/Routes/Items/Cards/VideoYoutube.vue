<template>
  <v-dialog :fullscreen="fscreen" v-model="modalValue" max-width="700">

    <v-card :loading="!loaded" loader-height="5">
      <v-toolbar>
         <v-icon>$vuetify.icons.video</v-icon>
          <v-toolbar-title>
           Example   {{title}}
          </v-toolbar-title>
       <v-spacer></v-spacer>
        <v-btn icon @click="modalValue=false"><v-icon>
          $vuetify.icons.close
        </v-icon></v-btn>
      </v-toolbar>
      <v-responsive :aspect-ratio="'1.7'">
        <!-- https://developers.google.com/youtube/player_parameters?hl=ru -->
       <iframe @load="loaded=true"  width="100%" height="100%" :src="'https://www.youtube.com/embed/'+clearVideoId+'?autoplay=1&listType=user_uploads&rel=0&start='+start" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
       </iframe>
      </v-responsive>
      <v-card-actions>
            <v-btn
              tag="a"
              disabled
              text
              color="deep-purple accent-4"
            >
              Read
            </v-btn>
            <v-btn
              tag="a"
              disabled
              text
              color="primary accent-4"
            >
              Where to eat
            </v-btn>
            <v-spacer>
            </v-spacer>
            <v-btn
              tag="a"
              target="_blank"
              :href="youtubeLink"
              text
              color="primary accent-4"
            >
              Like
            </v-btn>
    </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
     return  {
        modalValue: true,
        clearVideoId: '',
        start: '',
        loaded: false
     }

  },

  created() {
      var params = this.videoId.split('?');
      this.clearVideoId = params[0];
      if (params[1]) {
         var time =   params[1].match(new RegExp("t=([0-9]+)"));
         //time example ["t=23", "23", index: 0, input: "t=23", groups: undefined]
         if (time[1]) {
            this.start = time[1]
         }

      }

  },

  computed: {
      youtubeLink() {
        return 'https://youtube.com/watch?v='+this.clearVideoId;
      },

      fscreen () {
         if (this.$vuetify.breakpoint.smAndDown) {
           return true;

         } else {
           return false
         }
      }
  },

  watch: {
    modalValue (newValue, oldValue){
        if (newValue!=oldValue&&!newValue) {
          this.$emit('close-dialog');
        }
    }
  }
}
</script>
