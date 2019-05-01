
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
  _ch: ['SdTtl', 'SdTgl', 'RLg', 'StAction', 'VSpacer', 'SpDvv', 'StHorMenu']
};

export const SpTlb = RTb;
