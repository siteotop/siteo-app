
export const SdTlb = {
  _p: {
      height: {
        $comp: 'PropHeight',
        validators: {min:30, max:80},
        default:48
      },

      dark: 'readyPropBoolean',

      clippedLeft: 'readyPropBoolean',

      clippedRight: 'readyPropBoolean',

      dense: 'readyPropBoolean',

      color: {
        $comp: 'PropColor',
        default: 'primary'
      }

  },
  _c: ['elevation'],
  _ch: ['SdTtl', 'SdTgl', 'SdLgo', 'StAction', 'VSpacer', 'StHorMenu']
};
