



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
