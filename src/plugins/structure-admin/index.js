
import DesignSettingsNavigation from './Navigation.vue';
import DesignTabsBlock from './DesignTabsBlock.js';
import * as SettingsBlocks from './Blocks';
import ComponentsHelper from './ComponentsHelper.js';


const install = function (Vue, options) {


      options.$coreVue._siteoPlugins['design'] = ComponentsHelper(Vue);
      // if website founded

      // register some component which needed for create settings navigation drawer
      Vue.component(DesignTabsBlock.name, DesignTabsBlock);
      Vue.component(DesignSettingsNavigation.name, DesignSettingsNavigation);

      // add navigator drawer as default component in  renderList
      if (options.$coreVue.renderList) {
          options.$coreVue.renderList.push(DesignSettingsNavigation.name);
      }
      // add all settings blocks to components;
      for (var name in SettingsBlocks ) {
        Vue.component(name, SettingsBlocks[name]);
      }




}


export default {
  install
}
