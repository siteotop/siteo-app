
//import {readyPropClassForFlex} from '../readyProps.js';

export const Flx =  {
   p/*_props*/: {
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
      'PBt',
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

  p/*_props*/: {

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
  p/*_props*/: {
    // height
    h: 'readyPropHeight',
    // container
    c: 'readyPropClassForContainer',
    ...PLt.p/*_props*/
  },
  _ch:  PLt._ch
}



// PageSection
export const PSc = {
  p/*_props*/: {

    //background
    b: 'readyPropColor',


  },

   a/*_attrib*/: [],

  d/*_data*/: {
    // image background
    i: 'readyPropImage',
  },

  _ch: ['PCt',  'PTr']
}
