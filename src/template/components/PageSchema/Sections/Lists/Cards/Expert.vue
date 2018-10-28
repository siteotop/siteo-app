<template functional>
<v-card class="elevation-1">
      <v-layout justify-center row wrap>
        <v-flex justify-center text-xs-center>
            <v-avatar size="150" tile >
              <img
                :src="props.picture"
                alt="Avatar"
            >
            </v-avatar>
        </v-flex>
      </v-layout>
      <v-card-text>
        <h5 class="headline">{{props.name}}</h5>
        <span class="subheading">  {{props.position}} </span>
      </v-card-text>
      <v-card-text class="body-2 font-weight-light">
        {{props.about}}
      </v-card-text>
      <v-card-actions>
      </v-card-actions>
</v-card>
</template>


<script>
  export default {

      props: {
         name: { // author
           type: String,
           default: '',
         },

         position: { // position
           type: String,
           default: '',
         },
         picture: { // avatar
           type: String,
           default: '',
         },

         about: { // quote
           type: String,
           default: '',
         }
      }
  }
</script>
