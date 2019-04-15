import {SpLay} from './SpCt';

export const SpCrs = {
  _p: {
    cycle: 'readyPropBoolean',
    dark: 'readyPropBoolean',
    light: 'readyPropBoolean',
    height: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:500
    },
    hideControls: 'readyPropBoolean',
    hideDelimiters: 'readyPropBoolean',
    reverse: 'readyPropBoolean',
    vertical: 'readyPropBoolean',
  },
  _c: ['background', 'elevation'],
  _ch: ['SpCrsi']

}


export const SpCrsi = {
  _p: {
    trn: 'readyPropTransition',
    rtrn: 'readyPropTransition',
    ...SpLay._p,
  },

  _d: {
    i: 'readyPropImage',
  },

  _ch: SpLay._ch

}
