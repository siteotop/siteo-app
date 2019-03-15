

/**Basic components*/
import * as components from './components';
import ICONS from './icons';

export default {

  name: 'siteo-template',

  install: function (Vue, $coreVue) {
    for (let NameComponent in components) {
       Vue.component(NameComponent, components[NameComponent] );
    }

     $coreVue.IconsRegister(ICONS);
  }

}
