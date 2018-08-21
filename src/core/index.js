require('babel-polyfill');

import Vue from 'vue'; //1 include vue

/**Progres bar */
import VueProgressBar from 'vue-progressbar';

/**VUE-META
  for  manage <title> and others <head> html elements
*/
import Meta from 'vue-meta'
Vue.use(Meta);


/**ROUTER
   create Routing for every APP
*/
import VueRouter from 'router';
Vue.use(VueRouter);
//import RouterInstall from 'core/router/install.js';

/**Vue Store
  Storing all data from backend
*/
import StoreInstall from './store/install.js';

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
import './icons.js';


/**CORE COMPONENTS
  All components which was created by Siteo
*/
import * as components from './components';
for (let NameComponent in components) {
   Vue.component(NameComponent, components[NameComponent] );
}


/** SiteoInstall Function  */

/**
@example  options = {
    stores: {},
    router: { routes:  {}, components: {} },
    Vue: {}
}

*/


const MY_ICONS = {
  'complete': 'check',
  'cancel': '',
  'close': '',
  'delete': 'delete', // delete (e.g. v-chip close)
  'clear': '',
  'success': '',
  'info': '',
  'warning': '',
  'error': '',
  'prev': 'prev',
  'next': 'next',
  'checkboxOn': 'checkbox',
  'checkboxOff': 'checkbox-empty',
  'checkboxIndeterminate': 'checkbox-minus',
  'delimiter': '', // for carousel
  'sort': '',
  'expand': 'arrow-d',
  'menu': 'menu',

  'subgroup': '',
  'dropdown':'arrow-d',

  'radioOn': '',
  'radioOff': '',
  'edit': ''
}

/***
*/
export const SiteoCoreInstall = function (template, data,  plugins ) {

   console.log(data);

   Vue.use(Vuetify, {icons: MY_ICONS, theme:  data.WEBSITE.design? data.WEBSITE.design.theme.colors:{}});

   Vue.use(VueProgressBar, {
     color: 'rgb(106, 180, 255)',
     failedColor: 'red',
     thickness: '3px',
   })

   //add to site core  main objects
  // options.coreVue.extends = siteCore;
   template.coreVue.store = StoreInstall(Vue, /*options.store||{},*/ data );
   //options.coreVue.router = RouterInstall(Vue, options.router||{}, options.coreVue.store);
   template.coreVue.router =  new VueRouter({
       base: data.DNS.active.path,
       mode: 'history',
       fallback: false,  // для браузеров где нет History Api  (IE9) будет просто открывать новую страницу
       routes: template.routes

    });

   sync(template.coreVue.store, template.coreVue.router );

   if (plugins&&plugins.length) {
      for (var i in plugins ) {
        Vue.use(plugins[i], {coreVue:template.coreVue, pluginOptions: plugins[i].options  } );
      }

   }

   let app2 = new Vue(
      template.coreVue
   );

}
