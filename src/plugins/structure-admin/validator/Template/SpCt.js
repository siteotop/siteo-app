
export const Flx =  {
   _c: [],     
   _ch: ['SpLay', 'SpTtl', 'StAction', 'SpAvt', 'SpTxt', 'SpImg', 'SpCrd', 'SpCrs', 'SpExp', 'SpTbs', 'SpLst', 'SpTml']
}



export const SpLay = {

  _p: {

    lc: 'readyPropClassForLayout',
    fc: 'readyPropClassForFlex',
    e: {
      $comp: 'PropSelect',
      items: ['v-flex', 'div'],
      default: 'div'
    },

  },

  _ch: ['Flx', ...Flx._ch]


}





export const SpCt = {
  _p: {
    // height
    h: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:300
    },
    // element  tag


    //background
    b: 'readyPropColor',

    // image background
    i: 'readyPropImage',

    cc: 'readyPropClassForContainer',
    ...SpLay._p
  },

  _ch: SpLay._ch
}


export const SpPrl = SpCt;
export const SpImg = SpCt;
