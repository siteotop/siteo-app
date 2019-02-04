

/**Basic components*/
import * as components from './components';
import ICONS from './icons';
import RouteError from './components/Routes/Error.vue';

export default {

  name: 'siteo-pages',

  install: function (Vue, options) {
    Vue.component('RouteError', RouteError);
    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }

    options.$coreVue.IconsRegister(ICONS);
  },


  routes: {
     RouteError,
  }

}
