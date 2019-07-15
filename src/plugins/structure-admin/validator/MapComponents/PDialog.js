

//PageDialog
export const PDl = {

  p/*_props*/: {
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

    //eager
    z:'readyPropBoolean',

    //maxWidth
    m:'readyPropWidth',

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
    w:'readyPropWidth',

    //noClickAnimation
    a: 'readyPropBoolean',

    //openOnHover
    b: 'readyPropBoolean',

    //openDelay
    j: 'readyPropTime',


  },
  _ch: ['PBt', 'PCd']


}
