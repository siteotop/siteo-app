
import {PLt} from './PContainer';

//PageTabs
export const PTb = {
  t: 'Tabs',
  d: 'Tabs and content',
  helperProps: {
    a: {
      t: 'alignWithTitle',
      d: ''
    },
    r: {
      t: 'right',
      d: ''
    },
    c: {
      t: 'centered',
      d: ''
    },
    o: {
      t: 'color',
      d: ''
    },
    d: {
      t: 'dark',
      d: ''
    },
    l: {
      t: 'light',
      d: ''
    },
    f: {
      t: 'fixedTabs',
      d: ''
    },
    g: {
      t: 'grow',
      d: ''
    },
    s: {
      t: 'hideSlider',
      d: ''
    },
    i: {
      t: 'iconsAndText',
      d: ''
    },
    //mobileBreakPoint: 'readyPropBoolean',
    h: {
      t: 'showArrows',
      d: ''
    },
    w: {
      t: 'sliderColor',
      d: ''
    }
  }
}


export const TCt = {
  t: 'Tab contetn',
  d: '',
  helperProps: {
    a: {
      t: 'transition',
      d: ''
    },
    b: {
      t: 'reverseTransition',
      d: ''
    },

    ... PLt.helperProps
  },

  helperData: {
    t: {
      t: 'Title',
      d: ''
    }
  }
}
