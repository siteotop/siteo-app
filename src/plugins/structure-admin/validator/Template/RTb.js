
export const RTb = {
  _p: {
      h: {
        $comp: 'PropHeight',
        validators: {min:30, max:80},
        default:48
      },

      d: 'readyPropBoolean',

      l: 'readyPropBoolean',

      r: 'readyPropBoolean',

      e: 'readyPropBoolean',

      c: {
        $comp: 'PropColor',
        default: 'primary'
      }

  },
  _c: ['elevation'],
  _ch: ['TTl', 'TTg', 'RLg', 'PAc', 'VSpacer', 'SpDvv', 'StHorMenu']
};

export const TTl = {
  _c: ['hidden', 'textsize', 'margin', 'padding', 'textcolor']
}

export const SpTlb = RTb;
