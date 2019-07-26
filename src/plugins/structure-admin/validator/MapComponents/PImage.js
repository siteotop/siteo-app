

export const PIm =  {

  p/*_props*/: {
    //aspectRatio:
    a: 'readyPropRatio',
    //contain
    b: 'readyPropBoolean',

    //width
    w: 'readyPropWidth',
    //height
    h: 'readyPropHeight',

    //gradient
    g: {
      $comp: 'PropTitle',
      default:'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'
    },
    //position
    p: {
      $comp: 'PropTitle',
      default:'center center'
    },
    //maxHeight
    c: 'readyPropHeight',

    //maxWidth
    d: 'readyPropWidth',

    //minHeight
    e:'readyPropHeight',
    //minWidth
    f: 'readyPropWidth',

  },

  d/*_data*/: {
    // image background
    a: 'readyPropDataTitle',
    // image background
    i: 'readyPropImage',
    l: 'readyPropImage',
  },

  h/*_children*/: [ 'PLt', 'PCd', 'PTr']
}
