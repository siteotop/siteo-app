/**
  main object for template
*/
import App from './components/App.vue';
import basicRoutes from './components/routes';
import * as components from './components/Elements';

export default {
  install: function (Vue, options) {

    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }
  },

  routes: basicRoutes,
  coreVue: App,
  icons: [],
  //store: {}

}
