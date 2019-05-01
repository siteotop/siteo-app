
import {PLt} from './PCt';

export const SpExp = {
  _p: {
    inset: 'readyPropBoolean',
    popout: 'readyPropBoolean',
    focusable: 'readyPropBoolean',
    expand: 'readyPropBoolean',
    dark: 'readyPropBoolean',
    light: 'readyPropBoolean'
  },
  _c: ['background', 'elevation'],
  _ch: ['SpExpi']

}


export const SpExpi = {
  _p: {
    ...PLt._p,
  },

  _d: {
    t: 'readyPropDataTitle'
  },

  _ch: PLt._ch

}
