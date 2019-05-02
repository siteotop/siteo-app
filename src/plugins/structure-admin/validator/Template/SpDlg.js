


export const SpDlg = {

  _p: {
    //dark
    d: 'readyPropBoolean',
    //light
    l:'readyPropBoolean',

    //fullWidth
    fw: 'readyPropBoolean',

    //fullscreen
    fs:'readyPropBoolean',

    //hideOverlay
    ho:'readyPropBoolean',

    //lazy
    lz:'readyPropBoolean',

    //maxWidth
    mw:{
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
    sc: 'readyPropBoolean',

    //transition
    tr: 'readyPropTransition',

    //width
    w:{
      $comp: 'PropHeight',
      validators: {min:200, max:1500},
      default:500
    },
  },
  _ch: ['PAc', 'SpCrd']


}
