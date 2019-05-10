
//PAvatar
export const PAv = {
  t: 'Avatar',
  d: 'Image like avatar, logo,  or icon',
  helperData: {
    p: {
      t: 'Image',
      d: 'Image src'
    },
    pt: {
      t: 'Title for image',
      d: 'Square type'
    },
    i: {
      t: 'Icon',
      d: 'Icon type'
    },
    t: {
      t: 'Title text',
      d: 'Text for avatar'
    }
  },

  helperProps: {
    t:{
      t: 'Tile',
      d: 'Square type'
    },
    s:{
      t: 'Size',
      d: 'Sets the height and width of the element'
    },
    c:{
      t: 'Color',
      d: 'Background color'
    },

    //width
    a: {
      t: 'width',
      d: ''
    },

    //height
    b:{
      t: 'height',
      d: ''
    },

    //left
    d: {
      t: 'left',
      d: ''
    },

    //right
    e: {
      t: 'right',
      d: ''
    },
  }
}

// RootLogo
export const RLg = {
  t: 'Logo',
  d: 'Website logo',

  helperProps:  PAv.helperProps

}
