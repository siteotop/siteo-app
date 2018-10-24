<template functional>
<v-card class="elevation-0 transparent">
      <v-layout justify-center row wrap>
        <v-flex justify-center text-xs-center>
            <v-avatar size="130" >
              <img
                :src="props._av"
                alt="Avatar"
            >
            </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout  >
        <v-flex align-start class="grey--text">
            <AppIcon scale="6" name="si-quote"></AppIcon>
        </v-flex>

        <v-flex class="headline font-weight-thin font-italic">
          {{props._qu}}
            <v-divider></v-divider>
        </v-flex>
      </v-layout>

      <v-card-actions>
        <v-spacer>
        </v-spacer>
        <div>
        <strong class="title">{{props._au}}</strong>
          <br>
        <em class="subheading">{{props._po}}</em>
      </div>
      </v-card-actions>
</v-card>
</template>


<script>
  export default {
      props: {
         _au: { // author
           type: String,
           default: '',
         },

         _po: { // position
           type: String,
           default: '',
         },
         _av: { // avatar
           type: String,
           default: '',
         },

         _qu: { // quote
           type: String,
           default: '',
         }
      }
  }
</script>
