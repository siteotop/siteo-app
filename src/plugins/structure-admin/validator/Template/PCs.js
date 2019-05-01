import {PLt} from './PCt';

export const PCs = {
  _p: {
    c: 'readyPropBoolean',
    d: 'readyPropBoolean',
    l: 'readyPropBoolean',
    h: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:500
    },
    i: 'readyPropBoolean',
    e: 'readyPropBoolean',
    r: 'readyPropBoolean',
    v: 'readyPropBoolean',
  },
  _c: ['background', 'elevation'],
  _ch: ['CSe']

}

//Carusel element
export const CSe = {
  _p: {
    t: 'readyPropTransition',
    r: 'readyPropTransition',
    ...PLt._p,
  },

  _d: {
    i: 'readyPropImage',
  },

  _ch: PLt._ch

}
