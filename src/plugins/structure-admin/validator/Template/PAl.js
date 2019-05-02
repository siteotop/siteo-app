

export const PAl = {
  _d: {
      d: 'readyPropDataDesc',
      i: 'readyPropIcon',
  },
  _p: {
    //color: props.cnf.c,
    c:'readyPropColor',

    //outline: props.cnf.o,
    o: 'readyPropBoolean',
    //icon: props.cnf.i,

    //type: props.cnf.t,
    t: {
      $comp: 'PropSelect',
      items: [
        'success',
        'info',
        'warning',
        'error'
      ],
      default: 'success'
    }
  },

  _c: ['padding', 'margin']

}
