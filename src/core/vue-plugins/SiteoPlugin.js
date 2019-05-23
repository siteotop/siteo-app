







const install  = function (Vue, options) {

    /** register siteo Plugin
      @param plugin is object of pplugin
      @param startCore using when plugin is registering before  createSiteo();
    */
    Vue.prototype.registerSiteoPlugin = function (plugin, startCore) {


       var instance, _pluginsStore, _configPlugin;
       if (startCore) {
          instance = startCore;
          _pluginsStore = startCore._plugins;
          _configPlugin = startCore._siteo_config[plugin.name]||{};
       } else {
          instance = this;
          _pluginsStore = this.$root.$options._plugins;
          _configPlugin = this.$root.$options._siteo_config[plugin.name]||{};
       }

       if (!plugin.name) {
         console.log('Plugin has not param plugin.name');
         return ;
       }
       if ( _pluginsStore[plugin.name]) {
         console.log(`Plugin ${plugin.name} was loaded early`);
         return false;
       }


       console.log(` Call register Plugin Before = ${startCore?' yes': 'no'} ` );
       console.log(instance);
       console.log( _pluginsStore);



      /**
        install plugin to Vue throaght Vue.use
      */
      if (plugin&&plugin.install) {
         Vue.use(plugin);
      }

      /**
         install everythings for app  in (store, router, on others)
      */
      if (plugin.siteoInstall) {
         plugin.siteoInstall(instance, _configPlugin );
      }

      // install for Vue
      if (plugin.registerComponent) {
        _pluginsStore[plugin.name] = plugin.registerComponent();
      } else {
        _pluginsStore[plugin.name] = true;
      }


    }

    


}


export default  {
  install: install,

}
