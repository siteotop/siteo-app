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

      _al: { // Action Component name
        type: String,
        default: ''
      },


      _at: {
        type: String,
        default: ''
      },

      $_al: {
        type: String

      },

      $aa: { // Action props for StAction
        type: Object,
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
        //default: false
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

      $vl:  { // version list type of list ( list like V-list )
        type: Boolean,
        default:false
      }


    }
}
