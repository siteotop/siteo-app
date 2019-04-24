

export const SpAlr = {
  _d: {
      d: 'readyPropDataDesc'
  },
  _p: {
    //color: props.cnf.c,
    c:'readyPropColor',

    //outline: props.cnf.o,
    o: 'readyPropBoolean',
    //icon: props.cnf.i,
    i: 'readyPropIcon',
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
