

export const classCommon = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],

  default: []
};

export const classForContainer = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'gridlist'],
  default: ['justify-center', 'text-xs-center', 'pt-5', 'pb-4']
};

export const classForLayout = {
  $comp: 'PropClass',
//  allow: ['padding', 'margin', 'textalign', 'textcolor'],
  additional: ['blockwrap', 'blocklayout', 'gridlist'],
  default: []
};

export const classForText = {
  $comp: 'PropClass',
  allow: ['textsize', 'textcolor', 'textalign', 'texttransform'],
  default: []
};

export const tagH = {
  $comp: 'PropSelect',
  items: ['h1','h2','h3','h4','h5','h6'],
  default: 'h1'
};
