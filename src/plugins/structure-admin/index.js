
import DesignSettingsNavigation from './Navigation.vue';
import * as SettingsBlocks from './Blocks';
import {helperComponents} from './_helper/components'


export default {

  name: 'siteo-plugin-structure-admin',

  install:function (Vue) {
      // register some component which needed for create settings navigation drawer
      Vue.component('siteo-plugin-structure-admin', DesignSettingsNavigation);
      // add all settings blocks to components;
      var $helperComponents = helperComponents(Vue);
      for (var name in SettingsBlocks ) {
        SettingsBlocks[name].$helperComponents = $helperComponents;
        Vue.component(name, SettingsBlocks[name]);
      }
  }


}
