
export const StToolbar = {
  _p: {
      height: {
        $comp: 'PropHeight',
        validators: {min:30, max:80},
        default:48
      },

      dark: {
        $comp: 'PropBoolean',
        default: false
      },

      clippedLeft: {
        $comp: 'PropBoolean',
        default: false
      },

      clippedRight: {
        $comp: 'PropBoolean',
        default: false
      },

      dense: {
        $comp: 'PropBoolean',
        default: false
      },

      color: {
        $comp: 'PropColor',
        default: 'primary'
      }

  },
  _c: ['elevation'],
  _ch: ['StTitle', 'StDrawerToogle', 'StLogo', 'StAction', 'StSpacer', 'StHorMenu']
};
