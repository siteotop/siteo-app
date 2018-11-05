export default {
    props: {

      _t: { // title
        type: String,
        default: ''
      },

      _s: { //subtitle
        type: String,
        default: ''
      },

      _d: { //description
        type: String,
        default: ''
      },

      _m: { // Media is   image or  inline svg (inline string)
        type: String,
        default: ''
      },


      $vc: { // v-card class
        type: String,
        default: ''
      },

      $ht: { // number og <h{n}> tag
        type: Number,
        default: 3
      },

      $_ms: { // Media size  prop for v-avatar
        type: Number,
        default: 100
      },

      $_mt: { // tile for v-avatar
        type: Boolean,
        default: false
      },
      // Settings props

      $_t: { //title class
        type: String,
        default: ''
      },

      $_s: { //subtitle class
        type: String,
        default: ''
      },

      $_d: { // description class
        type: String,
        default: ''
      },

      $ac: { // Action Component name
        type: String,
        default: ''
      }

    }
}
