
export const SpAvt = {
  _d: {
    // title content
    p: 'readyPropImage',
    pt: 'readyPropDataTitle',
    i: 'readyPropIcon',
    t: 'readyPropDataTitle'
  },
  _p: {

    t:'readyPropBoolean',
   // size
    s: {
      $comp: 'PropHeight',
      validators: {min:20, max:300},
      default:45
    },

    c: 'readyPropColor',

  },

  _c: ['textsize', 'textcolor', 'textalign', 'texttransform'],


}

//RootLogo
export const RLg ={
  //_d: SpAvt._d,
  _p: SpAvt._p,
  _c: SpAvt._c,
}
