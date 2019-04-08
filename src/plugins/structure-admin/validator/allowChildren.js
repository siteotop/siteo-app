
import * as  readyProps from './readyProps';


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
  _ch: ['StpCt']
};

/**

*/

export const StpCt = {
  _p: {
    cc: readyProps['classForContainer']
  },
  _ch: ['StpCtT', 'StpCtCh']
}

export const StpCtCh = {
  _p: {
    cc: readyProps['classForContainer']
  },
  _ch: ['StpCt']
}

export const StpCtT = {
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

  _p: {
    cc: readyProps['classCommon'],
    /**
      number for <h{tag}>
    */
    tt: readyProps['tagH'],

    /*
      title class
    */
    tc: readyProps['classForText'],

    /**
      description class
    */
    dc: readyProps['classForText']

  }

}
