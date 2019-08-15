



// PageToolbar

export const PTr = {
  p/*_props*/: {
     // height
      h: {
        $comp: 'PropHeight',
        validators: {min:30, max:120},
        default:48
      },
      // dark
      d: 'readyPropBoolean',

      //dense
      e: 'readyPropBoolean',

      //color
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
  c/*_class*/: ['elevation'],
  h/*_children*/: ['TTl', 'TTg', 'RLg', 'RAc', 'PBt', 'RSp', 'RDv', 'PMn']
};

//ToolbarTitle
export const TTl = {
  c/*_class*/: ['display', 'textsize', 'margin', 'padding', 'textcolor']
}
