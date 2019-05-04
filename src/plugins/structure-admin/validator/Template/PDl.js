

//PageDialog
export const PDl = {

  _p: {
    //dark
    d: 'readyPropBoolean',
    //light
    l:'readyPropBoolean',

    //fullWidth
    f: 'readyPropBoolean',

    //fullscreen
    e:'readyPropBoolean',

    //hideOverlay
    h:'readyPropBoolean',

    //lazy
    z:'readyPropBoolean',

    //maxWidth
    m:{
      $comp: 'PropHeight',
      validators: {min:200, max:1500},
      default:500
    },

    //origin
    o: {
      $comp: 'PropSelect',
      items: [
        'center center',
        'right center'
      ],
      default: 'right center'
    },

    //persistent
    p: 'readyPropBoolean',

    //scrollable
    s: 'readyPropBoolean',

    //transition
    r: 'readyPropTransition',

    //width
    w:{
      $comp: 'PropHeight',
      validators: {min:200, max:1500},
      default:500
    },
  },
  _ch: ['RBt', 'PCd']


}
