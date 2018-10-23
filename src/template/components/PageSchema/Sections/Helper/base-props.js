
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

    _fc: { // class for flexbox
      type: String,
      default: 'xs12 sm12 md12'
    }


  }


}
