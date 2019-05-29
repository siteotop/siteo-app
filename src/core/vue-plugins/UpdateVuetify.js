



const install  = function (Vue, options) {


  /**
    Hot add  icons to global usage in Vuetify
  */


    Vue.prototype.updateVuetifyIcons = function (icons) {
        for (let i in icons) {
          this.$vuetify.icons.values[i] = icons[i];
        }
    };


  /**
     Hot reload configs for Vuetify

     @param designVuetify  structure for Vuetify settings
     {
       _p: {l: {primary: 'sdsdf'}, d: {}, dark: true }
     }
  */
    Vue.prototype.updateVuetifyOptions = function(designVuetify) {
        if (!designVuetify) {
          return;
        }
        //update themes
        if ( designVuetify._p) {
          if (designVuetify._p.dark!==undefined) {
              this.$vuetify.theme.dark = designVuetify._p.dark
          }
          // insert light theme
          if (designVuetify._p.l) {
              this.$vuetify.theme.themes.light = designVuetify._p.l;
          }
          // insert dark theme
          if (designVuetify._p.d) {
              this.$vuetify.theme.themes.dark = designVuetify._p.d;
          }
          // add icons
          if (designVuetify._p.i) {
            this.updateVuetifyIcons(designVuetify._p.i);
          }
        }
    }

}


export default  {
  install: install
}
