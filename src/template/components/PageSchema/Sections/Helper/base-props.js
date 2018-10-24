
export default {

  props: {


    _id: {   // id of block
      type: String,
      default: '',
    },

    _na: { // name of block
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

    _bc: { // background color
      type: String,
      default: '',
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
