
export const PLs = {
  _p: {
    //color
    b: 'readyPropColor',
    d: 'readyPropBoolean',
    s: 'readyPropBoolean',
    t: 'readyPropBoolean',
    w: 'readyPropBoolean',
    l: 'readyPropBoolean',
    a: 'readyPropBoolean',

    //elevation: cnf.
    c: 'readyPropElevation',
    //height
    e: 'readyPropHeight',
    //rounded: cnf.
    f:'readyPropBoolean',
    //shaped: cnf.
    g:'readyPropBoolean',
    //tile: cnf.
    h:'readyPropBoolean',
    //width:
    i: 'readyPropWidth'
  },
  _c: ['background', 'elevation'],
  _ch: ['LTi']
}

// ListAvatar
export const  LAv = {
  d/*_data*/: {
    i: 'readyPropImage'
  }
}
export const  LCt = {
  d/*_data*/: {
    t: 'readyPropDataTitle',
    d: 'readyPropDataTitle'
  }

}

export const LAc={
  d/*_data*/: {
    i: 'readyPropIcon'
  }

}


export const LTi = {
  _p: {
    avatar: 'readyPropBoolean',
    color: 'readyPropColor',
  },

  _ch: ['LAv', 'LCt', 'LAc']
}
