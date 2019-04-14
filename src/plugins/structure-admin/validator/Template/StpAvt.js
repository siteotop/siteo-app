
export const StpAvt = {
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
