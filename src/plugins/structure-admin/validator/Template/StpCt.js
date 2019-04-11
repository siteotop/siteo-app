export const StpCt = {
  _p: {
    // tag
    // image background
    i: {
      $comp: 'PropTitle',
      default:'https://picsum.photos/1500/600?random'
    },

    // height
    h: {
      $comp: 'PropHeight',
      validators: {min:200, max:1000},
      default:300
    },

    cc: 'readyPropClassForContainer'
  },
  _ch: ['StpCtT', 'StpCtCh']
}


export const StpPrl = StpCt;
export const StpImg = StpCt;
