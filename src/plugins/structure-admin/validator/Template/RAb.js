
// RootToolbar
export const PTr = {
  _p: {
      h: {
        $comp: 'PropHeight',
        validators: {min:30, max:80},
        default:48
      },

      d: 'readyPropBoolean',

      e: 'readyPropBoolean',

      c: {
        $comp: 'PropColor',
        default: 'primary'
      }

  },
  _c: ['elevation'],
  _ch: ['TTl', 'TTg', 'RLg', 'RAc', 'RBt', 'RSp', 'RDv', 'StHorMenu']
};

//ToolbarTitle
export const TTl = {
  _c: ['hidden', 'textsize', 'margin', 'padding', 'textcolor']
}

export const  RAb= {
  p: {
    //clippedLeft
    l: 'readyPropBoolean',
    //clippedRight
    r: 'readyPropBoolean',
    ...PTr._p
  },
  _c: ['elevation'],
  _ch: PTr._ch
}
