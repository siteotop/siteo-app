import {PLt} from './PContainer';



export const rootDesign = {
  _ch: [ 'Vtf', 'RAb', 'RDw',  'RCt', 'RFt', 'RAc', 'RMn']
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
