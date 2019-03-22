

export const root = {
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
        $comp: {
          name: 'v-slider',
          props: {
            min: 30,
            max: 80,
            thumbLabel: true,
            inverseLabel: true,
            //thumbSize: 24,
            alwaysDirty: true,
          },
        },

        default:48
      }
  },

  _c: [],
  _ch: ['StTitle', 'StDrawerToogle', 'StLogo', 'StAction', 'StSpacer', 'StHorMenu']
};

export const StDrawer = {
  _ch: ['StDrawerToolbar', 'StVerMenu']
};

export const StFooter = {
};

export const StDrawerToolbar =  {
      _ch: ['StTitle', 'StLogo', 'StAction', 'StSpacer', 'StDrawerToogle']
};
