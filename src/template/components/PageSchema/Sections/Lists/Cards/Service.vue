<template functional>
  <v-hover>
    <v-card
       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
          <v-img v-if="props.picture"
            aspect-ratio="1.61"
            class="white--text"
            :src="props.picture"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{props.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title v-else class="headline">
             {{props.title}}
          </v-card-title>
          <v-card-title v-if="props.subtitle">
            <span class="headline font-weight-medium">${{props.price}} </span>
            <v-spacer></v-spacer>
            <AppAction  :large="false"></AppAction>
          </v-card-title>
          <v-card-text>
            {{props.preview}}
          </v-card-text>
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

    subtitle: {
      type: String
    },
    preview: {
      type: String
    },

    price: {
      type:String
    }

  }

}
</script>
