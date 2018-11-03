<template functional>
<v-card :class="props.$vc">
        <v-card-text v-if="props._me">
          <v-avatar  :tile="props.$mt" :size="props.$ms"  >
            <img  :src="props._me" :alt="props._ti">
          </v-avatar>
        </v-card-text>
        <v-card-text >
          <component :is="'h'+props.$ht"  :class="props.$_ti">{{props._ti}}</component>
        </v-card-text>
        <v-card-text  >
          <div :class="props.$_st" >{{props._st}}</div>
        </v-card-text>
        <v-card-text  :class="props.$_de" >
          {{props._de}}
        </v-card-text>
        <v-card-actions v-if="props.$ac">
            <component :is="props.$ac"> </component>
        </v-card-actions>
</v-card>
</template>


<script>
  export default {
      props: {
        _me: { // Media is   image or  inline svg (inline string)
          type: String,
          default: ''
        },

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




        $vc: { // v-card class
          type: String,
          default: 'elevation-0 transparent'
        },

        $ht: { // number og <h{n}> tag
          type: Number,
          default: 3
        },

        $ms: { // Media size  prop for v-avatar
          type: Number,
          default: 100
        },

        $mt: { // tile for v-avatar
          type: Boolean,
          default: false
        },
        // Settings props

        $_ti: { //title class
          type: String,
          default: 'display-3'
        },

        $_st: { //subtitle class
          type: String,
          default: 'title grey--text'
        },

        $_de: { // description class
          type: String,
          default: 'headline'
        },

        $ac: { // Action Component name
          type: String,
          default: ''
        }

      }
  }
</script>
