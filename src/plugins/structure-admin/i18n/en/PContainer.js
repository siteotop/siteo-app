

export const PLt = {
  t: 'Layout',
  d: 'Layout for flexbox',
  helperProps: {
    lc: {
      t: 'Layout class',
      d: ''
    },
    fc: {
      t: 'Flex class',
      d: ''
    },
    ft: {
      t: 'Flex tag',
      d: ''
    }
  }
}

export const Flx = {
  t: 'Flex box',
  d: 'Flex element for <Layout>',
  helperProps: {
    fc: PLt.helperProps.fc
  }

}

export const  PCt = {
  t: 'Container',
  d: 'Container from vuetify',
  helperProps: {
    h: {
      t: 'Height',
      d: ''
    },
    c: {
      t: 'Container class',
      d: ''
    },
    ...PLt.helperProps

  }
}

export const PSc = {
 t: 'Section',
 d: 'Container for page. Use <section> tag',
  helperProps: {

    b: {
      t: 'Background',
      d: ''
    },


  },
  helperData: {
    i: {
      t: 'Image',
      d: ''
    }
  }
}


export const PPx = {
  ...PSc,
  t: 'Parallax',
  d: 'Parallax container'

}
