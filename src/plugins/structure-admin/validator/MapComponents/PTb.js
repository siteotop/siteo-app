
import {PLt} from './PContainer';

export const PTb = {
  _p: {
    a: 'readyPropBoolean',
    r: 'readyPropBoolean',
    c: 'readyPropBoolean',
    o: 'readyPropColor',
    d: 'readyPropBoolean',
    l: 'readyPropBoolean',
    f: 'readyPropBoolean',
    g: 'readyPropBoolean',
    s: 'readyPropBoolean',
    i: 'readyPropBoolean',
    //mobileBreakPoint: 'readyPropBoolean',
    h: 'readyPropBoolean',
    w: 'readyPropColor'

  },
  _c: ['background', 'elevation'],
  _ch: ['TCt']

}


export const TCt = {
  _p: {
    a: 'readyPropTransition',
    b: 'readyPropTransition',
    ...PLt._p,
  },

  _d: {
    t: 'readyPropDataTitle'
  },

  _ch: PLt._ch

}
