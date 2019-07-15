



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
       p: {l: {primary: 'sdsdf'}, d: {}, dark: true }
     }
  */
    Vue.prototype.updateVuetifyOptions = function(designVuetify) {
        if (!designVuetify) {
          return;
        }
        //update themes
        if ( designVuetify.p/*_props*/) {
          if (designVuetify.p.dark!==undefined) {
              this.$vuetify.theme.dark = designVuetify.p.dark
          }
          // insert light theme
          if (designVuetify.p.l) {
              this.$vuetify.theme.themes.light = designVuetify.p.l;
          }
          // insert dark theme
          if (designVuetify.p.d) {
              this.$vuetify.theme.themes.dark = designVuetify.p.d;
          }
          // add icons
          if (designVuetify.p.i) {
            this.updateVuetifyIcons(designVuetify.p.i);
          }
        }
    }

}


export default  {
  install: install
}
