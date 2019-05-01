
//import {readyPropClassForFlex} from '../readyProps.js';

export const Flx =  {
   _p: {
      fc: 'readyPropClassForFlex',
   },
   _ch: ['SpLay', 'SpTtl', 'StAction', 'SpAvt', 'SpTxt', 'SpImg', 'SpCrd', 'SpCrs', 'SpExp', 'SpTbs', 'SpLst', 'SpTml', 'SpDvd', 'SpAlr','SpVid', 'SpDlg', 'SpHtm']
}



export const SpLay = {

  _p: {

    lc: 'readyPropClassForLayout',
    fc: 'readyPropClassForFlex',
    ft: {
      $comp: 'PropSelect',
      items: ['v-flex', 'div'],
      default: 'div'
    },

  },

  _ch: ['Flx', ...Flx._ch]


}





export const PCt = {
  _p: {
    // height
    h: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:300
    },


    //background
    b: 'readyPropColor',

    c: 'readyPropClassForContainer',
    ...SpLay._p
  },

  _d: {
    // image background
    i: 'readyPropImage',
  },

  _ch: SpLay._ch
}


export const SpPrl = PCt;
export const SpImg = PCt;
