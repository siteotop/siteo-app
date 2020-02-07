


export const helperOptionsVuetify = function (vuetifyOptObject, designVuetify ) {

  if (designVuetify.p.dark!==undefined) {
      vuetifyOptObject.theme.dark = designVuetify.p.dark
  }
  // insert light theme
  if (designVuetify.p.l) {

      vuetifyOptObject.theme.themes.light = designVuetify.p.l;

    //  console.log(JSON.stringify(this.$vuetify.theme.themes));
  }
  // insert dark theme
  if (designVuetify.p.d) {
      vuetifyOptObject.theme.themes.dark = designVuetify.p.d;
  }
}


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


        //update themes
        if (designVuetify&&designVuetify.p/*_props*/) {
            helperOptionsVuetify(this.$vuetify, designVuetify);
          // add icons
          if (designVuetify.p.i) {
            this.updateVuetifyIcons(designVuetify.p.i);
          }
        }
    }

}


export const pluginUpdateVuetify  = {
  install: install
}
