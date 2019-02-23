

/**Basic components*/
import * as components from './components';
import ICONS from './icons';

export default {

  name: 'siteo-pages',

  install: function (Vue, options) {
    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }

    options.$coreVue.IconsRegister(ICONS);
  }

}
