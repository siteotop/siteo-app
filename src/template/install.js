

/**
  main object for template
*/
import App from './components/App.vue';
import basicRoutes from './routes';
import * as components from './components/Elements';
import * as ComponetSections from './components/PageSchema/Sections';
App.ComponetSections = ComponetSections;

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
