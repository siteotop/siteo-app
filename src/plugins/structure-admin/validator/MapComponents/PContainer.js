

export const Flx =  {
   p/*_props*/: {
     //cols:
      a: 'readyPropFlexCount',

     //sm:
      b: 'readyPropFlexCount',

     //md:
      c: 'readyPropFlexCount',

     //lg:
      d: 'readyPropFlexCount',

     //xl:
      e: 'readyPropFlexCount',

     //offset:
      f: 'readyPropFlexCount',

     //offsetSm:
      g: 'readyPropFlexCount',

     //offsetMd:
      h: 'readyPropFlexCount',

     //offsetLg:
      i: 'readyPropFlexCount',

     //offsetXl:
      j: 'readyPropFlexCount',

     //order:
      k: 'readyPropFlexCount',

     //ordertSm:
      l: 'readyPropFlexCount',

     //ordertMd:
      m: 'readyPropFlexCount',

     //ordertLg:
      n: 'readyPropFlexCount',

     //ordertXl:
      o: 'readyPropFlexCount',

     //alignSelf:
      p: 'readyPropRow'
   },
   c/*_class*/: ['display'], 
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
      'PAd'
      ]
}


// PageLayout
export const PLt = {

  p/*_props*/: {

    //align
    a: 'readyPropRow',

    //alignSm:
    b: 'readyPropRow',

    //alignMd:
    e: 'readyPropRow',

    //alignLg:
    f: 'readyPropRow',

    //alignXl:
    g: 'readyPropRow',

    //alignContent:
    h: 'readyPropRow',

    //alignContentSm:
    i: 'readyPropRow',

    //alignContentMd:
    j: 'readyPropRow',

    //alignContentLg:
    k: 'readyPropRow',

    //alignContentXl:
    l: 'readyPropRow',
    //justify:
    m: 'readyPropRow',

    //justifySm:
    n: 'readyPropRow',

    //justifyMd:
    o: 'readyPropRow',

    //justifyLg:
    p: 'readyPropRow',

    //justifyXl:
    q: 'readyPropRow',

    //dense:
    r: 'readyPropBoolean',

    //noGutters:
    s: 'readyPropBoolean',


    //ft  flex tag
    ft: {
      $comp: 'PropSelect',
      items: ['v-row', 'div'],
      default: 'div'
    },
    // container
    c: 'readyPropBoolean',
    // class for container
    d: 'readyPropClassForContainer'

  },
  c/*_class*/: ['padding', 'textsize', 'texttransform', 'background', 'textcolor', 'hidden', 'textalign', 'display'],

  h/*_children*/: [
    'Flx',
    ...Flx.h/*_children*/]


}




// PageSection
export const PSc = {
  p/*_props*/: {

    //background
    b: 'readyPropColor',



  },

  a/*_attrib*/: [],


  h/*_children*/: ['PLt', 'PPx', 'PIm', 'PYv', 'PCs', 'PSd', 'PSr' ]
}
