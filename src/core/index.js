require('babel-polyfill');
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
import messages from './i18n';

/**ROUTER
   create Routing for every APP
*/
import RouterInstall from './router';

/**Vue Store
  Storing all data from backend
*/
import StoreInstall from './store';

/**SYNC router with store
  in Vue store we can get 'route' property
*/
import { sync } from 'vuex-router-sync';


/****VUETIFY
  Vuetify Material Design Component Framework
  https://vuetifyjs.com/ru/
*/
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

/**CSS*/
import './style/animations.scss';
import './style/common.css'


/**ICONS*/
import IconsRegister from  './icons/register.js';


/**CORE COMPONENTS
  All components which was created by Siteo
*/

import  AppForm from './components/AppForm';
Vue.component('AppForm', AppForm);


/** SiteoInstall Function  */

/**
@example  options = {
    stores: {},
    router: { routes:  {}, components: {} },
    Vue: {}
}

*/


import VeeValidate from 'vee-validate';


export const SiteoCoreInstall = function (APP_INSTANCE, appDns, template,   plugins ) {

   //console.log(data);
   //start Vuetify
   Vue.use(Vuetify, {
     theme:  APP_INSTANCE.design? APP_INSTANCE.design.theme.colors:{}
   });

   Vue.use(template);
   // start VueProgressBar
   Vue.use(VueProgressBar, {
     color: Vue.prototype.$vuetify.theme.accent ||'rgb(106, 180, 255)',
     failedColor: 'red',
     thickness: '3px',
   });


   // create store
   template.coreVue.store = StoreInstall(Vue, APP_INSTANCE, appDns );
   // create router
   template.coreVue.router = RouterInstall(Vue, template.coreVue.store, appDns.active.path, template.routes )

   //sync router with store for access route from store
   sync(template.coreVue.store, template.coreVue.router );


   template.coreVue.el = '#siteo-top-app';

   // Create VueI18n instance with options

   template.coreVue.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: appDns.active.lang, // app lang
      messages: messages // set locale messages
    });

    // connect  vee-validator
    Vue.use(VeeValidate, appDns.active.lang!='en'? {
      dictionary: messages.validation,
      local: appDns.lang
    }:undefined);

    // Connect Icon.Register
    template.coreVue.IconsRegister = IconsRegister;
    if (template.icons) {
      IconsRegister(template.icons)
    } else {
      IconsRegister(template.icons)
    }


    // add plugins
    template.coreVue.SiteoAddPlugin = function (plugin) {
      Vue.use(plugin, {coreVue:template.coreVue, pluginOptions: plugin.options });
    };
    template.coreVue._siteoPlugins = {};
    
    if (plugins&&plugins.length) {
       for (var i in plugins ) {
          template.coreVue.SiteoAddPlugin(plugins[i]);
       }
    }

    // start Vue instance
    let app2 = new Vue(
      template.coreVue
    );

}
