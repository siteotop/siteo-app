

/**Basic components*/
import * as components from './components';
import ICONS from './icons';

import RouteError from './components/Routes/Error.vue';
import RouteOrder from './components/Routes/Order.vue';
import RouteOneService from './components/Routes/OneService.vue';

export default {
  install: function (Vue, options) {

    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }

    options.coreVue.IconsRegister(ICONS);
  },

  //components: components,
  //ICONS: ICONS,
  routes: {
     RouteOrder,

     RouteError,
     RouteOneService
  }

}
