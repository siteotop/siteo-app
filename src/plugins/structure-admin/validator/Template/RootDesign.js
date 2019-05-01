import {PLt} from './PCt';



export const rootDesign = {
  _ch: ['theme', 'RTb', 'RDw',  'RCt', 'RFt', 'StAction']
};

export const RCt = {

};

export const RFt = {
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

      ...PLt._p,
    },

    _ch: PLt._ch
};
