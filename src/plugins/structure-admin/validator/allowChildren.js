

export const rootDesign = {
  _ch: ['theme', 'StToolbar', 'StDrawer',  'StRoot', 'StFooter', 'StAction']
};

export const theme = {
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    warning: "#FFC107",
    info: "#2196F3",
    success: "#4CAF50"
  }

};

export const StRoot = {
};

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

export const StTitle = {
  _c: ['hidden', 'textsize', 'margin', 'padding', 'textcolor']
}

export const StDrawer = {
  _ch: ['StDrawerToolbar', 'StVerMenu']
};

export const StFooter = {
};

export const StLogo = {

}

export const StDrawerToolbar =  {
  _ch: ['StTitle', 'StLogo', 'StAction', 'StSpacer', 'StDrawerToogle']
};


export const rootPage = {
  _ch: ['StpSection']
};

/**

*/

export const StpSection = {
  _c: ['background'],
  _ch: ['StpSectionTitle']
}

export const StpSectionTitle = {
  _d: {
    t: {
      $comp: 'PropTitle',
      default:''
    },
    d: {
      $comp: 'PropTitle',
      default:''
    }
  },
  _c: ['padding', 'margin', 'textalign', 'textcolor']
}
