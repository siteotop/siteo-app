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


import pluginUpdateVuetify from './vue-plugins/UpdateVuetify';
import pluginSiteoPlugin from './vue-plugins/SiteoPlugin';
Vue.use(pluginUpdateVuetify);
Vue.use(pluginSiteoPlugin);
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
//require( './style/animations.scss');
require('./style/common.css')

import {vuetifyIcons} from './icons';



import axios from 'axios';
CoreVue.axios = axios;

import VS2 from 'vue-script2';
CoreVue.$script = VS2.load;


import SiteoRoutes from './routes';

/**
start Siteo
*/
export const createSiteo =  function ({configs, plugins} ) {

   var AppInstanse = {};
   AppInstanse._plugins = {};
   // start VueProgressBar

   AppInstanse.vuetify = new Vuetify({
     icons: {
       iconfont: 'md',  // default
       values: vuetifyIcons
     },

     theme: {
       themes: {

       }
     }
   });

   Vue.use(VueProgressBar, {
     //color: AppInstanse.vuetify.theme.accent ||'rgb(106, 180, 255)',
     failedColor: 'red',
     thickness: '3px',
     autoFinish: false,
   });

   AppInstanse._siteo_config = configs;

   // plugin for http requests
   var RESTApi = createRESTApi(configs.host_api||process.env.HOST_API);
   // create store
   AppInstanse.store = createStore(Vue, RESTApi, configs.baseUrl);

   // create router
   AppInstanse.router = createRouter(Vue, AppInstanse.store, configs.baseUrl )

   //sync router with store for access route from store
   sync(AppInstanse.store, AppInstanse.router);


   // connect routes translating to all messages
   //APP.options.messages[APP.options.instance.data.lang].routes = APP.options.instance.routes;
   // Create VueI18n instance with options
   AppInstanse.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: configs.lang, // app lang
      //messages: messages // set locale messages
    });

    import(/* webpackChunkName: "locale-[request]" */ './i18n/'+ configs.lang).then(({default:local}) => {
        //console.log(local);
        AppInstanse.i18n.mergeLocaleMessage(configs.lang, local);
    }).catch(error => 'An error occurred while loading the component');

    if (plugins) {
       for (var i in plugins ) {
          Vue.prototype.registerSiteoPlugin(plugins[i], AppInstanse);
       }
    }

    AppInstanse.router.addRoutes(SiteoRoutes(configs||{}));


    AppInstanse.extends = CoreVue;
    return  new Vue( AppInstanse );


}
