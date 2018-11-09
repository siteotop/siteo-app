/**
  main object for template
*/
import App from './components/App.vue';

/**Basic routes*/
import basicRoutes from './components/routes'

/**Basic components*/
import * as components from './components';

/**ICONS*/
import IconsRegister from  './icons/register.js';
import ICONS from './icons';

export default {
  install: function (Vue, options) {

    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }

   IconsRegister(ICONS)
  },

  routes: basicRoutes,
  coreVue: App

}
