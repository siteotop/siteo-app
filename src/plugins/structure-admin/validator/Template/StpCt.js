export const StpLay = {

  _p: {

    lc: 'readyPropClassForLayout',
    fc: 'readyPropClassForFlex',
    e: {
      $comp: 'PropSelect',
      items: ['v-flex', 'div'],
      default: 'div'
    },

  },

  _ch: ['StpLay', 'StpTitle', 'StAction', 'StpAvt', 'StpTxt']


}


export const StpCt = {
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
    ...StpLay._p
  },

  _ch: StpLay._ch
}


export const StpPrl = StpCt;
export const StpImg = StpCt;
