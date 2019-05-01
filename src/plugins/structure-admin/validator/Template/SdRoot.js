import {SpLay} from './SpCt';


export const rootDesign = {
  _ch: ['theme', 'SdTlb', 'RDw',  'SdRoot', 'SdFtr', 'StAction']
};

export const SdFtr = {
    _p: {
      //absolute
      a: 'readyPropBoolean',
      //inset
      i: 'readyPropBoolean',
      //dark
      d: 'readyPropBoolean',
      //dark
      l: 'readyPropBoolean',
      //dark
      f: 'readyPropBoolean',
      //color
      c: 'readyPropColor',

      ...SpLay._p,
    },

    _ch: SpLay._ch
};
