

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

export const PCt = {
 t: 'Container',
 d: 'Container for page. Use <section> tag',
  helperProps: {
    h: {
      t: 'Height',
      d: ''
    },
    b: {
      t: 'Background',
      d: ''
    },
    c: {
      t: 'Container class',
      d: ''
    },
    ...PLt.helperProps


  },
  helperData: {
    i: {
      t: 'Image',
      d: ''
    }
  }
}
