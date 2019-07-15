//PageCarusel
export const PCs = {
  _p: {
    //continuous
    a: 'readyPropBoolean',

    //cycle
    c: 'readyPropBoolean',

    //dark
    d: 'readyPropBoolean',

    //light
    l: 'readyPropBoolean',

    // height
    h: 'readyPropHeight',


    //hideDelimiterBackground
    b: 'readyPropBoolean',

    //ideDelimiters
    e: 'readyPropBoolean',

    //reverse
    r: 'readyPropBoolean',

    //vertical
    v: 'readyPropBoolean',

    //interval
    f: 'readyPropTime',

    //showArrows
    g: 'readyPropBoolean',

    //showArrowsOnHover
    j:  'readyPropBoolean',

  },
  _c: ['background', 'elevation'],
  _ch: ['CSe']

}

//Carusel element
export const CSe = {
  _p: {
    t: 'readyPropTransition',
    r: 'readyPropTransition',

  },

  d/*_data*/: {
    i: 'readyPropImage',
  },

  _ch: ['PCt', 'PLt', 'PSh']

}
