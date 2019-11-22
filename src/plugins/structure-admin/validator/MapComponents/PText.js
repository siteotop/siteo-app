
export const PTx = {
  d/*_data*/: {
    // title content
    t: 'readyPropDataDesc',
    // field from
    a: {
      $comp: 'PropSelect',
      items: [
        'name',
        'title',
        'slogan',
        'actionText',
        'description'
      ],
      default: 'description'
    },
  },

  p/*_props*/: {
    // tag default div
    a: {
      $comp: 'PropSelect',
      items: [
        'span',
        'b',
        'i'
      ],
      default: 'span'
    },
  },


  c/*_class*/: ['background', 'textsize', 'textcolor', 'textalign', 'texttransform', 'textweight', 'textwrap', 'padding', 'margin'],


}


export const PHt = {
  d/*_data*/: {
    // title content
    t: 'readyPropHtmlEditor'
  },

  c/*_class*/: ['textsize', 'textcolor', 'textalign', 'texttransform', 'textweight', 'textwrap'],


}
