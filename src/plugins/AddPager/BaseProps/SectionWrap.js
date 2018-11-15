
export default {

  props: {


    _$: {   // id of block (used for attr id of block)
      type: String,
      default: '',
    },

    _n: { // name of block or one word title (used for menu in PageToolbar)
      type: String,
      default: '',
    },


    _t: { //Title  Header Block
      type: String,
      default: '',
    },

    _d: { // Description Header Block
      type: String,
      default: '',
    },

    _p: { //  picture for background
      type: String,
      default: '',
    },


    $ht: { // h tag number (used for title of block)
       type: Number,
       default: 2
    },

    $he: { //height block
      type: [Boolean,  Number],
      default: 600
    },



    $tc: { // top container  class for top v-container
      type: String,
      default: ''

    },

    $tl: { // layout classes for top container
      type: String,
      default: ' justify-center text-xs-center pt-5 pb-4'
    },

    $_t: { //  tag class header
      type: String,
      default: 'display-1 secondary--text'
    },

    $_d: { // description class
      type: String,
      default: 'title font-weight-medium'
    },


    $gr: { // gradient work on v-img
      type: String,
      default: ''
    },

    $co: { // name of component
      type: String,
      default:'v-container',
    },



    $bls: { // Array  blocks for flex
      type: [Boolean, Array],
      default: false

    },

    $bc: { //container for blcoks  class for container  which included layout and  flexbox
      type: String,
      default: 'grid-list-md'
    },

    $bl: { //layout for blocks
      type: String,
      default: 'row wrap justify-center'
    },

    $bf: { //flex for block
      type: String,
      default: 'xs12 sm12 md12'
    }


  }


}
