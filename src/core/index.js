//import "@babel/polyfill";

import Vue from 'vue'; //1 include vue

/**Progres bar */
import VueProgressBar from 'vue-progressbar';

/**VUE-META
  for  manage <title> and others <head> html elements
*/
import Meta from 'vue-meta'
Vue.use(Meta);

/**I18N */
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


/**
  main object for template
*/
import CoreVue from './components/App.vue';



import * as CoreComponents from  './components';
for (let NameComponent in CoreComponents) {
   Vue.component(NameComponent, CoreComponents[NameComponent]);
}

import {createRESTApi} from './http/rest-api.js';


/**ROUTER
   create Routing for every APP
*/
import createRouter from './router';

/**Vue Store
  Storing all data from backend
*/
import createStore from './store';

/**SYNC router with store
  in Vue store we can get 'route' property
*/
import { sync } from 'vuex-router-sync';


/****VUETIFY
  Vuetify Material Design Component Framework
  https://vuetifyjs.com/ru/
*/
import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';


/**CSS*/
require( './style/animations.scss');
require('./style/common.css')


/**ICONS*/
import IconsRegister from  './components/Icons/register.js';
CoreVue.IconsRegister= IconsRegister;

import axios from 'axios';
CoreVue.axios = axios;

import VS2 from 'vue-script2';
CoreVue.$script = VS2.load;

export const installVuePlugin = function(plugin) {
    if (plugin&&plugin.install) {
      Vue.use(plugin, {$coreVue:CoreVue,  name: plugin.name });
    }
}

const installSiteoPlugin = function (plugin) {
  console.log(CoreVue._siteo_config);
  console.log(plugin.name);

  if (plugin.siteoInstall) {
    // install special function for siteoInstall (using for SSR)
    // on SSR components registering one time, but is some deals which need registered every time
    plugin.siteoInstall(CoreVue, CoreVue._siteo_config[plugin.name] );
  }

}

/**
 helper for register site plugins
*/

const SiteoAddPlugin = function (plugin) {
  console.log(CoreVue._plugins);
  if (!plugin.name) {
    console.log('Plugin has not param plugin.name');
    return ;
  }
  if ( !CoreVue._plugins[plugin.name]) {
    // install for Vue
    CoreVue._plugins[plugin.name] = true;
    installVuePlugin(plugin);
    installSiteoPlugin(plugin);
  } else {
      console.log(`Plugin ${plugin.name} was loaded early`);
  }
};
CoreVue.SiteoAddPlugin = SiteoAddPlugin;


/**
start Siteo
*/
export const createSiteo =  function ({configs, messages, plugins} ) {

   CoreVue._plugins = {};
   // start VueProgressBar
   Vue.use(VueProgressBar, {
     color: Vue.prototype.$vuetify.theme.accent ||'rgb(106, 180, 255)',
     failedColor: 'red',
     thickness: '3px',
   });

   CoreVue._siteo_config = configs;

   // plugin for http requests
   var RESTApi = createRESTApi(configs.host_api||process.env.HOST_API);
   // create store
   CoreVue.store = createStore(Vue, RESTApi, configs.baseUrl);

   // create router
   CoreVue.router = createRouter(Vue, CoreVue.store, configs.baseUrl )

   //sync router with store for access route from store
   sync(CoreVue.store, CoreVue.router );


   // connect routes translating to all messages
   //APP.options.messages[APP.options.instance.data.lang].routes = APP.options.instance.routes;
   // Create VueI18n instance with options
   CoreVue.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: configs.lang, // app lang
      messages: messages // set locale messages
    });


}

/**
  start app with  main app plugin and additional plugins
*/
export const startSiteo = function (APP, plugins) {
  // add plugins
  console.log(process.env.SSR);
  if (process.env.SSR =='on') {
    console.log(' ssr ');
    if (APP) {
      installSiteoPlugin(APP);
    }
  } else {
    console.log(' no ssr ');
    if (APP) {
      SiteoAddPlugin(APP);
    }
    if (plugins) {
       for (var i in plugins ) {
          SiteoAddPlugin(plugins[i]);
       }
    }
  }

  return  new Vue(
    CoreVue
  );

}
