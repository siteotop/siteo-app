<template functional>
<v-card :class="props._vc">
        <v-card-text v-if="props._me">
          <v-avatar  :tile="props._mt" :size="props._ms"  >
            <img  :src="props._me" :alt="props._ti">
          </v-avatar>
        </v-card-text>
        <v-card-text >
          <component :is="'h'+props._hn"  :class="props._tc">{{props._ti}}</component>
        </v-card-text>
        <v-card-text  >
          <div :class="props._sc" >{{props._st}}</div>
        </v-card-text>
        <v-card-text  :class="props._dc" >
          {{props._de}}
        </v-card-text>
        <v-card-actions v-if="props._ac">
            <component :is="props._ac"> </component>
        </v-card-actions>
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

        _de: { //description
          type: String,
          default: ''
        },

        _vc: { // v-card class
          type: String,
          default: 'elevation-0 transparent'
        },

        _hn: { // number og <h{n}> tag
          type: Number,
          default: 3
        },

        _mc: { // type of media
          type: [ String, Boolean],
          default: false
        },

        _me: { // Media is   image or  inline svg (inline string)
          type: String,
          default: ''
        },

        _ms: { // Media size  prop for v-avatar
          type: Number,
          default: 100
        },

        _mt: { // tile for v-avatar
          type: Boolean,
          default: false
        },
        // Settings props

        _tc: { //title class
          type: String,
          default: 'display-3'
        },

        _sc: { //subtitle class
          type: String,
          default: 'title grey--text'
        },

        _dc: { // description class
          type: String,
          default: 'headline'
        },

        _ac: { // Action Component name
          type: String,
          default: ''
        }

      }
  }
</script>
