
// PageToolbar
const h = {
  $comp: 'PropHeight',
  validators: {min:30, max:120},
  default:48
}
export const PTr = {
  _p: {
      h: h,

      d: 'readyPropBoolean',

      e: 'readyPropBoolean',

      c: 'readyPropColor',

      //collapse: cnf.
      a: 'readyPropBoolean',

      //elevation: cnf.
      b: 'readyPropElevation',

      //flat: cnf.
      f: 'readyPropBoolean',

      //floating: cnf.
      g: 'readyPropBoolean',

      //light: cnf.
      i:'readyPropBoolean',

      //prominent: cnf.
      n: 'readyPropBoolean',

      //short: cnf.
      r: 'readyPropBoolean',

      //tile:  cnf.
      o: 'readyPropBoolean',

      q: 'readyPropImage',

  },
  _c: ['elevation'],
  _ch: ['TTl', 'TTg', 'RLg', 'RAc', 'RBt', 'RSp', 'RDv', 'RMn']
};

//ToolbarTitle
export const TTl = {
  _c: ['hidden', 'textsize', 'margin', 'padding', 'textcolor']
}

export const  RAb= {
  _p: {
    //clippedLeft
    s: 'readyPropBoolean',
    //clippedRight
    t: 'readyPropBoolean',

    //collapseOnScroll
    y: 'readyPropBoolean',

    //elevateOnScroll= cnf.
    v:  'readyPropBoolean',

    //props.fadeImgOnScroll = cnf.
    w:  'readyPropBoolean',

    //props.hideOnScroll = cnf.
    x:  'readyPropBoolean',

    //props.invertedScroll= cnf.
    u: 'readyPropBoolean',

    //props.scrollOffScreen= cnf.
    z: 'readyPropBoolean',

    //props.scrollTarget= cnf.
    ab: 'readyPropBoolean',

    //props.scrollThreshold = cnf.
    ac:  {
      $comp: 'PropTitle',
      default:''
    },

    //props.shrinkOnScroll  = cnf.
    ad: 'readyPropBoolean',

    ...PTr._p
  },
  _c: ['elevation'],
  _ch: PTr._ch
}
