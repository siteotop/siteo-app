<template>
  <v-dialog v-model="modalValue" max-width="700" eager>
    <template v-slot:activator="{ on }">
      <v-btn  fab small v-on="on">
        <v-icon>$vuetify.icons.video</v-icon>
      </v-btn>
    </template>
    <v-card >
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
       <iframe v-if="modalValue" width="100%" height="100%" :src="'https://www.youtube.com/embed/'+videoId+'?autoplay=1&rel=0'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
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
        modalValue: false
     }

  }
}
</script>
