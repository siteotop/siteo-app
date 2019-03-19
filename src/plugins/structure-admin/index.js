
import DesignSettingsNavigation from './Navigation.vue';
import DesignTabsBlock from './DesignTabsBlock.js';
import * as SettingsBlocks from './Blocks';
import {helperComponents} from './_helper/components.js';




export default {

  name: 'siteo-plugin-structure-admin',

  install:function (Vue) {
      // register some component which needed for create settings navigation drawer
      Vue.component(DesignTabsBlock.name, DesignTabsBlock);
      Vue.component('siteo-plugin-structure-admin', DesignSettingsNavigation);

      // add all settings blocks to components;
      var $componentsHelper = helperComponents(Vue);
      for (var name in SettingsBlocks ) {
        SettingsBlocks[name].StructureAdminHelper = $componentsHelper;
        Vue.component(name, SettingsBlocks[name]);
      }
  }


}
