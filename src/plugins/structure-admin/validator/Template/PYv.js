export const PYv = {
  _d: {
    // code video from youtube
    v: {
      $comp: 'PropTitle',
      default:''
    },

  },

  _p: {
    //aspect ration
    r: {
      $comp: 'PropSelect',
      items: ['1.3','1.4','1.5','1.6','1.7','1.8', '1.9', '2.0'],
      default: '1.4'
    }
  }

}
