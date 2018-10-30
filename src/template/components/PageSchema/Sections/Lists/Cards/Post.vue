<template functional>
  <v-hover>
    <v-card
       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
          <v-img v-if="props.picture"
            aspect-ratio="1.77"
            class="white--text"
            :src="props.picture"
          >

          </v-img>
          <v-card-title  class="headline">
             {{props.title}}
          </v-card-title>
          <v-card-text>
            {{props.preview}}
          </v-card-text>
          <v-card-actions>
            <v-btn :to="props.url">Read More</v-btn>

          </v-card-actions>
        </v-card>
      </v-hover>
</template>

<script>
export default {

  props: {

    picture: {
      type: String
    },

    title: {
      type: String
    },

    preview: {
      type: String
    },

    url: {
      type:String
    },


  }

}
</script>
