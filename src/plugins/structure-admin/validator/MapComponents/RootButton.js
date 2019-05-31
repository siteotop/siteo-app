
//RootButton
export const RBt =  {
  _p: {

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

  _d: {
    i: 'readyPropIcon',
    t: 'readyPropDataTitle',
    r: 'readyPropDataTitle',
    h: 'readyPropDataTitle'
  },

  _c: ['padding', 'textsize', 'texttransform', 'background', 'textcolor', 'hidden']
}

export const RAc = RBt;


// PageMenu
export const RMn = {
  _p: {
    ti:  'readyPropBoolean',
    ...RBt._p
  },
  _d:{
    c:  {
      $comp: 'PropSelect',
      items: [
        'page',
      ],
      default: 'page'
    }
  },
  _c: RBt._c,
  _ch: ['MBt', 'PDm']
}

// MenuButton
export const MBt = {
   _c: RBt._c,
   _d: RBt._d,
}
