
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
      'PDm',
      'PLt',
      'PIc',
      'PTl',
      'RBt',
      'RAc',
      'PTx',
      'PIm',
      'PEx',
      'PTb',
      'PLs',
      'PTa',
      'PTm',
      'PSd',
      'PSh',
      'PSg',
      'RDh',
      'PYv',
      'PHt',
      'RSp',
      'PMn',
      'PPx',
      'PPl',
      ]
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

export const PCt = {
  _p: {
    // height
    h: 'readyPropHeight',
    // container
    c: 'readyPropClassForContainer',
    ...PLt._p
  },
  _ch:  PLt._ch
}



// PageSection
export const PSc = {
  _p: {

    //background
    b: 'readyPropColor',


  },

  _a: [],

  _d: {
    // image background
    i: 'readyPropImage',
  },

  _ch: ['PCt',  'PTr']
}
