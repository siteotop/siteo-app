



// PageToolbar

export const PTr = {
  _p: {
      h: {
        $comp: 'PropHeight',
        validators: {min:30, max:120},
        default:48
      },

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
