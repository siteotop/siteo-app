export const StpCt = {
  _p: {
    // height
    h: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:300
    },
    // element  tag
    e: {
      $comp: 'PropSelect',
      items: ['v-flex', 'div'],
      default: 'div'
    },

    //background
    b: 'readyPropColor',

    // image background
    i: 'readyPropImage',

    cc: 'readyPropClassForContainer',
    lc: 'readyPropClassForLayout',
    fc: 'readyPropClassForFlex'
  },
  _ch: ['StpTitle', 'StAction', 'StpAvt']
}


export const StpPrl = StpCt;
export const StpImg = StpCt;
