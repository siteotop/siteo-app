







const install  = function (Vue, options) {

    // register siteo Plugin
    Vue.prototype.registerSiteoPlugin = function (plugin, startCore) {

       var instance, _pluginsStore, _configPlugin;
       if (startCore) {
          instance = startCore;
          _pluginsStore = startCore._plugins;
          _configPlugin = startCore._siteo_config[plugin.name]||{};
       } else {
          instance = this;
          _pluginsStore = this.$options._plugins;
          _configPlugin = this.$options._siteo_config[plugin.name]||{};
       }
       console.log(` Call register Plugin Before = ${startCore?' yes': 'no'} ` );
       console.log(instance);
       console.log( _pluginsStore);
      if (!plugin.name) {
        console.log('Plugin has not param plugin.name');
        return ;
      }
      if ( !_pluginsStore[plugin.name]) {
        // install for Vue
        _pluginsStore[plugin.name] = true;

        /**
          install plugin to Vue throaght Vue.use
        */
        if (plugin&&plugin.install) {
           Vue.use(plugin);
        }

        if (plugin.siteoInstall) {
           plugin.siteoInstall(instance, _configPlugin );
        }
      } else {
          console.log(`Plugin ${plugin.name} was loaded early`);
      }
    }

}


export default  {
  install: install,

}
