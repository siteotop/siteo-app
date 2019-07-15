
//RootButton
export const PBt =  {
  p/*_props*/: {

    //xSmall: cnf.
    n: 'readyPropBoolean',
    // small
    s: 'readyPropBoolean',

    //large
    l: 'readyPropBoolean',

    //xLarge:  cnf.
    z: 'readyPropBoolean',
    //absolute
    a: 'readyPropBoolean',

    //block
    b: 'readyPropBoolean',

    //bottom
    t: 'readyPropBoolean',

    //top
    p: 'readyPropBoolean',

    //left
    e: 'readyPropBoolean',

    //right
    r: 'readyPropBoolean',

    //dark
    d: 'readyPropBoolean',

    //icon
    i: 'readyPropBoolean',

    //light
    g: 'readyPropBoolean',

    //depressed
    y: 'readyPropBoolean',

    //exact
    x: 'readyPropBoolean',

    //fab
    f: 'readyPropBoolean',

    //fixed
    j: 'readyPropBoolean',

    //text
    v: 'readyPropBoolean',

    //outlin
    u: 'readyPropBoolean',

    //rounded
    m: 'readyPropBoolean',

    //target
    w: 'readyPropBoolean',

    //rel
    q: {
      $comp: 'PropSelect',
      items: ['nofollow', 'help', 'author', 'first', 'index', 'help', 'me', 'next', 'prefetch', 'search'],
      default: 'h1'
    },

    //color
    c: {
      $comp: 'PropColor',
      default: 'secondary'
    },

    // width
    ab: 'readyPropHeight',

    // height
    ac: 'readyPropWidth',

    //tile: cnf.
    ad: 'readyPropBoolean',

    //elevation: cnf.
    ae: 'readyPropElevation',

  },

  d/*_data*/: {
    i: 'readyPropIcon',
    t: 'readyPropDataTitle',
    r: 'readyPropDataTitle',
    h: 'readyPropDataTitle'
  },

  _c: ['padding', 'textsize', 'texttransform', 'background', 'textcolor', 'hidden']
}

export const RAc = PBt;


// PageMenu
export const PMn = {
  p/*_props*/: {
    ti:  'readyPropBoolean',
    ...PBt.p/*_props*/
  },
  d/*_data*/:{
    c:  {
      $comp: 'PropSelect',
      items: [
        'page',
      ],
      default: 'page'
    }
  },
  _c: PBt._c,
  _ch: ['MBt', 'PDm']
}

// MenuButton
export const MBt = {
   _c: PBt._c,
   d/*_data*/: PBt.d/*_data*/,
}
