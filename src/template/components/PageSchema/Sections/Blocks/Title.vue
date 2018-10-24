<template functional>
<v-card class="elevation-0 transparent">
        <v-card-text >
          <h2 class="display-2">{{props._ti}}</h2>
        </v-card-text>
        <v-card-text  >
          <div class="title grey--text" >{{props._st}}</div>
        </v-card-text>
        <v-card-text class=" headline" >
        {{props._de}}
        </v-card-text>
</v-card>
</template>


<script>
  export default {
      props: {
        _ti: { // title
          type: String,
          default: ''
        },

        _st: { //subtitle
          type: String,
          default: ''
        },

        _de: { //subtitle
          type: String,
          default: ''
        }
      }
  }
</script>
