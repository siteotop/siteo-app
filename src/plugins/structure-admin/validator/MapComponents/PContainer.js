
const cls = ['padding', 'margin', 'marginn',  'textsize', 'texttransform', 'background', 'textcolor', 'textalign', 'display'];
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
   c/*_class*/: cls,
   h/*_children*/: [
      'PAl',
      'PAv',
      'PCd',
      'PCs',
      'PDl',
      'PDm',
      'PRw',
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
      'PAd',
      'PPn'
      ]
}


// PageLayout
export const PRw = {

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
  c/*_class*/: cls,

  h/*_children*/: [
    'Flx',
    ...Flx.h/*_children*/]


}




// PageSection
export const PCt = {
  p/*_props*/: {

    //background
    a: 'readyPropBoolean',
    b: {
      $comp: 'PropSelect',
      items: ['section', 'div'],
      default: 'section'
    },



  },

  a/*_attrib*/: [],
  c/*_class*/: cls,

  h/*_children*/: ['PCt','PRw', 'PPx', 'PIm', 'PYv', 'PCs', 'PSd', 'PSr' ]
}
