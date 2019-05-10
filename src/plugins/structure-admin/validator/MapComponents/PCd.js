

export const PCd = {
  _p: {
    c:'readyPropColor',
    d:'readyPropBoolean',
    l:'readyPropBoolean',
    e:'readyPropElevation',
    f:'readyPropBoolean',
    h:'readyPropHeight',
    o:'readyPropBoolean',
    i:'readyPropImage',
    m:'readyPropHeight',
    a: {
      $comp: 'PropHeight',
      validators: {min:50, max:600},
      default: 300
    },
    n: {
      $comp: 'PropHeight',
      validators: {min:50, max:600},
      default: 300
    },
    v: {
      $comp: 'PropHeight',
      validators: {min:50, max:600},
      default: 300
    },
    r:'readyPropBoolean',
    t: 'readyPropBoolean',
    q:{
      $comp: 'PropHeight',
      validators: {min:50, max:600},
      default: 300
    },
  },
  _c: ['background'],

  _ch: ['Cti', 'Cte', 'Cac', 'PLt', 'PIm']

}

// v-card-title
export const Cti = {
  _c: ['background'],
  _ch: ['PTl', 'PTx', 'PAv', 'RSp']
}

// v-card-
export const Cte = {
  _ch: ['PTx', 'PAv']
}


export const Cac = {
  _ch: ['PTx', 'PAv', 'RBt']
}
