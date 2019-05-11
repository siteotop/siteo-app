
//import {readyPropClassForFlex} from '../readyProps.js';

export const Flx =  {
   _p: {
      fc: 'readyPropClassForFlex',
   },
   _ch: [
      'PAl',
      'PAv',
      'PCd',
      'PCs',
      'PDl',
      'PLt',
      'PTl',
      'RBt',
      'RAc',
      'PTx',
      'PIm',
      'PEx',
      'PTb',
      'PLs',
      'PTm',
      'RDh',
      'PYv',
      'PHt',
      'RSp',
      'RMn']
}


// PageLayout
export const PLt = {

  _p: {

    lc: 'readyPropClassForLayout',
    fc: 'readyPropClassForFlex',
    ft: {
      $comp: 'PropSelect',
      items: ['v-flex', 'div'],
      default: 'div'
    },

  },

  _ch: [
    'Flx',
    ...Flx._ch]


}




// PageContainer
export const PCt = {
  _p: {
    // height
    h: 'readyPropHeight',


    //background
    b: 'readyPropColor',

    c: 'readyPropClassForContainer',
    ...PLt._p
  },

  _d: {
    // image background
    i: 'readyPropImage',
  },

  _ch: PLt._ch
}

// PageParallax
export const PPx = PCt;
export const PIm = PCt;
