
//import {readyPropClassForFlex} from '../readyProps.js';

export const Flx =  {
   p/*_props*/: {
      fc: 'readyPropClassForFlex',
   },
   h/*_children*/: [
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

  h/*_children*/: [
    'Flx',
    ...Flx.h/*_children*/]


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
  h/*_children*/:  PLt.h/*_children*/
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

  h/*_children*/: ['PCt',  'PTr']
}
