

export const readyPropClassCommon = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],

  default: []
};

export const readyPropClassForContainer = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'gridlist'],
  default: ['justify-center', 'text-xs-center', 'pt-5', 'pb-4']
};

export const readyPropClassForLayout = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'blocklayout', 'gridlist'],
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
