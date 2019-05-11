


export const readyPropClassCommon = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],

  default: []
};

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
  validators: {min:20, max:300},
  default:45
}

export const readyPropTime = {
  $comp: 'PropSelect',
  items: [
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

export const readyPropImage = {
  $comp: 'PropTitle',
  default:'https://picsum.photos/1500/600?random'
};

export const readyPropIcon = {
  $comp: 'PropTitle',
  default:'si-close'
};


export const readyPropBoolean = {
  $comp: 'PropBoolean',
  default: true
}

export const readyPropColor = {
  $comp: 'PropClassBackground',
  default: 'primary'
}
