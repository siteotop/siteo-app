
//RootDrawer
export const RDw = {
  p/*_props*/:{
    //clipped
    c:'readyPropBoolean',
    //dark
    d:'readyPropBoolean',
    //light
    l:'readyPropBoolean',
    //disableResizeWatcher
    ds:'readyPropBoolean',
    //disableRouteWatcher
    dr:'readyPropBoolean',
    //fixed
    f:'readyPropBoolean',
    //floating
    g:'readyPropBoolean',
    //hideOverlay
    h:'readyPropBoolean',
    //miniVariant
    m:'readyPropBoolean',
    //miniVariantWidth:
    mw: {
      $comp: 'PropHeight',
      validators: {min:60, max:140},
      default:90
    },
    //mobileBreakPoint
    mb: 'readyPropBoolean',
    //permanent
    p: 'readyPropBoolean',
    //right
    r:'readyPropBoolean',
    //stateless
    s: 'readyPropBoolean',
    //temporary:
    t: 'readyPropBoolean',
    //touchless
    o: 'readyPropBoolean',
    //width
    w: {
      $comp: 'PropHeight',
      validators: {min:100, max:500},
      default:300
    }
  },
  h/*_children*/: ['PTr', 'PMn', 'PCd',  'PLs', 'StVerMenu']
};
