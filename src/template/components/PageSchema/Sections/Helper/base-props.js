
export default {

  props: {


    _id: {   // id of block (used for attr id of block)
      type: String,
      default: '',
    },

    _hn: { // h tag number (used for title of block)
       type: Number,
       default: 2
    },

    _he: { //height block
      type: [Boolean,  Number],
      default: 600
    },

    _cl: { // component which using in all _bls list (only this component)
      type: [Boolean, String],
      default: false
    },

    _cl_props: {
        type: Object,
    },

    _na: { // name of block or one word title (used for menu in PageToolbar)
      type: String,
      default: '',
    },

    _ti: { //Title  Header Block
      type: String,
      default: '',
    },

    _de: { // Description Header Block
      type: String,
      default: '',
    },

    _tc: { // top class for top v-container
      type: String,
      default: ''

    },
    _tl: { // layout classes for top container
      type: String,
      default: ' justify-center text-xs-center pt-5 pb-4'
    },

    _hc: { // h tag class header
      type: String,
      default: 'display-1 secondary--text'
    },

    _dc: { // description class
      type: String,
      default: 'title font-weight-medium'
    },

    _bc: { // background color
      type: String,
      default: '',
    },

    _gr: { // gradient work on v-img
      type: String,
      default: ''
    },

    _co: { // number of component
      type: String,
      default:'v-container',
    },

    _bi: { // background image
      type: String,
      default: '',
    },

    _bls: { // Array  blocks for flex
      type: [Boolean, Array],
      default: false

    },

    _cc: { //common  class for container  which included layout and  flexboxes
      type: String,
      default: 'grid-list-md'
    },

    _lc: { //common  class for layout which included flexboxes
      type: String,
      default: 'row wrap justify-center'
    },

    _fc: { //common  class for flexboxes
      type: String,
      default: 'xs12 sm12 md12'
    }


  }


}
