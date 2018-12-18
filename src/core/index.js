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
//delete CoreComponents;
/**ROUTER
   create Routing for every APP
*/
import RouterInstall from './router';

/**Vue Store
  Storing all data from backend
*/
import StoreInstall from './store';
import {createModelCRUD} from './store/helpers/model-events'
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
require( './style/animations.scss');
require('./style/common.css')


/**ICONS*/
import IconsRegister from  './components/Icons/register.js';

import axios from 'axios';

import VS2 from 'vue-script2';

import VeeValidate from 'vee-validate';


export default function (APP, plugins ) {


   //start Vuetify
   Vue.use(Vuetify, {
     theme:  APP.options.instance.design? APP.options.instance.design.theme.colors:{}
   });


   // start VueProgressBar
   Vue.use(VueProgressBar, {
     color: Vue.prototype.$vuetify.theme.accent ||'rgb(106, 180, 255)',
     failedColor: 'red',
     thickness: '3px',
   });


   // create store
   CoreVue.store = StoreInstall(Vue, APP.options.instance);
   // create router
   CoreVue.router = RouterInstall(Vue, CoreVue.store, APP.options.instance.configs.path )

   //sync router with store for access route from store
   sync(CoreVue.store, CoreVue.router );

   CoreVue.$script = VS2.load;
   CoreVue.axios = axios;



   // connect routes translating to all messages
   APP.options.messages[APP.options.instance.data.lang].routes = APP.options.instance.routes;
   // Create VueI18n instance with options
   CoreVue.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: APP.options.instance.data.lang, // app lang
      messages: APP.options.messages // set locale messages
    });

    // connect  vee-validator
    Vue.use(VeeValidate, {
      /**
      With SSR Frameworks like Nuxt, it is recommended to disable automatic injection since it may cause memory leaks due to all the validator instances being created for every component, which is not needed and may slow down your site.
      https://baianat.github.io/vee-validate/concepts/injections.html#injecting-parent-validator

      */
      inject: false,

      dictionary: APP.options.messages.validation||false,
      local: APP.options.instance.data.lang
     }
    );

    CoreVue.registerStoreModule = function (name, module) {
          CoreVue.store.registerModule(name, createModelCRUD(module))
    };

    CoreVue.IconsRegister= IconsRegister;
    // add plugins
    CoreVue.SiteoAddPlugin = function (plugin) {

      Vue.use(plugin, {$coreVue:CoreVue, $pluginOptions: plugin.options });
      if (plugin.siteoInstall) {
        plugin.siteoInstall(CoreVue, plugin.options)
      }

    };


    CoreVue.SiteoAddPlugin(APP);
    if (plugins&&plugins.length) {
       for (var i in plugins ) {
          CoreVue.SiteoAddPlugin(plugins[i]);
       }
    }

    // start Vue instance
    let app2 = new Vue(
      CoreVue
    );

    return app2;

}
