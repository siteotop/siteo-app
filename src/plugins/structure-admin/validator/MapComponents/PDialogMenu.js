

//PageDialogMenu
export const PDm = {

  _p: {
    //auto: cnf.a,
    a: 'readyPropBoolean',
    //top: cnf.b,
    b:  'readyPropBoolean',
    //bottom: cnf.c,
    c:  'readyPropBoolean',
    //left: cnf.d,
    d:  'readyPropBoolean',
    //right: cnf.e,
    e:  'readyPropBoolean',
    //closeOnClick: cnf.f,
    f:  'readyPropBoolean',
    //closeOnContentClick: cnf.g,
    g:  'readyPropBoolean',
    //disabled: cnf.h,
    h:  'readyPropBoolean',
    //fixed: cnf.i,
    i: 'readyPropBoolean',
    //fullWidth: cnf.j,
    j:  'readyPropBoolean',
    //eager: cnf.k,
    k:  'readyPropBoolean',
    //maxHeight: cnf.l,
    l: {
      $comp: 'PropHeight',
      validators: {min:200, max:1500},
      default:500
    },
    //maxWidth: cnf.m,
    m: {
      $comp: 'PropHeight',
      validators: {min:200, max:1500},
      default:500
    },
    //openOnClick
    n: 'readyPropBoolean',
    //openOnHover:  cnf.o,
    o: 'readyPropBoolean',
    //transition:  cnf.p,
    t: 'readyPropTransition',
    //offsetX:  cnf.q,
    q: 'readyPropBoolean',
    //offsetY:  cnf.r,
    r: 'readyPropBoolean',
    //offsetOverflow:  cnf.s
    s: 'readyPropBoolean'
  },
  _ch: ['PBt','PLs', 'PCd']


}
