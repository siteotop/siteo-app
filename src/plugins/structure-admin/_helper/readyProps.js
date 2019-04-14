

export const readyPropClassCommon = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],

  default: []
};

export const readyPropDataTitle = {
  $comp: 'PropTitle',
  default:''
}

export const readyPropClassForContainer = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'gridlist'],
  default: ['justify-center', 'text-xs-center', 'pt-5', 'pb-4']
};

export const readyPropClassForLayout = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'layout'],
  default: []
};


export const readyPropClassForFlex = {
  $comp: 'PropClass',
  allow: ['flexsize'],

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
