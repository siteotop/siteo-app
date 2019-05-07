
//RootButton
export const RBt = {
  t:'Button',
  d:'Button for link or action',
  helperProps: {
    s: {
      t: 'Small',
      d: ''
    },
    l: {
      t: 'Large',
      d: ''
    },
    a: {
      t: 'Absolute',
      d: ''
    },
    b: {
      t: 'Block',
      d: ''
    },
    t: {
      t: 'Bottom',
      d: ''
    },
    p: {
      t: 'Top',
      d: ''
    },
    e: {
      t: 'Left',
      d: ''
    },
    r: {
      t: 'Right',
      d: ''
    },
    d: {
      t: 'Dark',
      d: ''
    },
    i: {
      t: 'Icon',
      d: ''
    },
    g: {
      t: 'Light',
      d: ''
    },
    y: {
      t: 'Depressed',
      d: ''
    },
    x: {
      t: 'Exact',
      d: ''
    },
    f: {
      t: 'Fab',
      d: ''
    },
    j: {
      t: 'Fixed',
      d: ''
    },
    v: {
      t: 'Flat',
      d: ''
    },
    u: {
      t: 'Outline',
      d: ''
    },
    m: {
      t: 'Round',
      d: ''
    },
    c: {
      t: 'Background Color',
      d: ''
    },
    w: {
      t: 'Target blank',
      d: 'Open url in new tab'
    },

    q: {
      t: 'Rel',
      d: 'Choose correct rel attribute'
    }


  },
  helperData: {
    i: {
      t: 'Icon',
      d: ''
    },

    t: {
      t: 'Title',
      d: ''
    },
    r: {
      t: 'To',
      d: ''
    },

    h: {
      t: 'Href',
      d: ''
    },
  }
}

export const RAc = {
  t: 'Main Action',
  d: 'Action for App',
  helperData: RBt.helperData,
  helperProps: RBt.helperProps,

} ;


// PageMenu
export const RMn = {
 t: 'Menu ',
 d: 'Menu with buttons',
 helperProps: {
   ti: {
     t: 'Toolbar Menu',
     d: 'When menu is using in toolbar'

   },
   ...RBt.helperProps
 }
}

// MenuButton
export const MBt = {
  t: 'Menu Button',
  d: 'Data for menu position ',
  helperData: RBt.helperData
}
