


export const readyPropColorsTheme = {
  $comp: 'PropColorsTheme',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  default: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    warning: "#FFC107",
    info: "#2196F3",
    success: "#4CAF50"
  }
};

export const readyPropClassCommon = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],

  default: []
};

export const readyPropSides = {
  $comp: 'PropSelect',
  items: [
    'top',
    'right',
    'bottom',
    'left'
  ],
  default: 'top'
}

export const readyPropDataTitle = {
  $comp: 'PropTitle',
  default:''
}

export const readyPropDataDesc = {
  $comp: 'PropDescription',
  default:''
}


export const readyPropElevation = {
  $comp: 'PropHeight',
  validators: {min:0, max:24},
  default: 3
}

export const readyPropHeight = {
  $comp: 'PropHeight',
  validators: {min:50, max:900},
  default: 300
}

export const readyPropWidth = {
  $comp: 'PropHeight',
  validators: {min:50, max:1500},
  default: 300
}

export const readyPropSize = {
  $comp: 'PropHeight',
  validators: {min:10, max:300},
  default:45
}

export const readyPropTime = {
  $comp: 'PropSelect',
  items: [
    '50',
    '100',
    '300',
    '500',
    '800',
    '1000',
    '2000',
    '3000',
    '4000',
    '5000',
    '6000',
    '7000',
],
  default: '4000'
}


export const readyPropTransition = {
  $comp: 'PropSelect',
  items: [
    'slide-x-transition',
    'slide-x-reverse-transition',
    'slide-y-transition',
    'slide-y-reverse-transition',
    'scale-transition',
    'fade-transition',
    'expand-x-transition',
    'scroll-x-transition',
    'scroll-x-reverse-transition',
    'scroll-y-transition',
    'scroll-y-reverse-transition'
  ],
  default: 'slide-x-transition'
}

export const readyPropClassForContainer = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'gridlist'],
  default: []
};

export const readyPropClassForLayout = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'blocklayout'],
  default: []
};



export const readyPropClassForFlex = {
  $comp: 'PropClass',
  additional: ['flexsize', 'blockflex', 'offset', 'order'],
  default: []
};

export const readyPropClassForText = {
  $comp: 'PropClass',
  allow: ['textsize', 'textcolor', 'textalign', 'texttransform'],
  default: []
};

export const readyPropTagH = {
  $comp: 'PropSelect',
  items: ['h1','h2','h3','h4','h5','h6'],
  default: 'h1'
};

export const readyPropRatio = {
  $comp: 'PropSelect',
  items: ['0.5', '0.6', '0.8', '1', '1.2', '1.3','1.4','1.5','1.6','1.7','1.8', '1.9', '2.0'],
  default: '1.4'
}

export const readyPropImage = {
  $comp: 'PropTitle',
  default:'https://picsum.photos/1500/600?random'
};

export const readyPropIcon = {
  $comp: 'PropTitle',
  default:'$vuetify.icons.action'
};


export const readyPropBoolean = {
  $comp: 'PropBoolean',
  default: true
}

export const readyPropColor = {
  $comp: 'PropClassBackground',
  default: 'primary'
}
