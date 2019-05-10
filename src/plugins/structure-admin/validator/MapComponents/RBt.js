
//RootButton
export const RBt =  {
  _p: {
    s: 'readyPropBoolean',
    l: 'readyPropBoolean',
    a: 'readyPropBoolean',
    b: 'readyPropBoolean',
    t: 'readyPropBoolean',
    p: 'readyPropBoolean',
    e: 'readyPropBoolean',
    r: 'readyPropBoolean',
    d: 'readyPropBoolean',
    i: 'readyPropBoolean',
    g: 'readyPropBoolean',
    y: 'readyPropBoolean',
    x: 'readyPropBoolean',
    f: 'readyPropBoolean',
    j: 'readyPropBoolean',
    v: 'readyPropBoolean',
    u: 'readyPropBoolean',
    m: 'readyPropBoolean',
    w: 'readyPropBoolean',
    q: {
      $comp: 'PropSelect',
      items: ['nofollow', 'help', 'author', 'first', 'index', 'help', 'me', 'next', 'prefetch', 'search'],
      default: 'h1'
    },
    c: {
      $comp: 'PropColor',
      default: 'secondary'
    }
  },

  _d: {
    i: 'readyPropIcon',
    t: 'readyPropDataTitle',
    r: 'readyPropDataTitle',
    h: 'readyPropDataTitle',
  },

  _c: ['padding', 'textsize', 'texttransform', 'background', 'textcolor', 'hidden']
}

export const RAc = RBt;


// PageMenu
export const RMn = {
  _p: {
    ti:  'readyPropBoolean',
    ...RBt._p
  } ,
  _c: RBt._c,
  _ch: ['MBt', 'PDm']
}

// MenuButton
export const MBt = {
   _c: RBt._c,
   _d: RBt._d,
}
