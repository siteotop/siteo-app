
import DesignSettingsNavigation from './components/Navigation.vue';
import DesignTabsBlock from './components/DesignTabsBlock.js';
import * as SettingsBlocks from './components/Blocks';
import ADomainReserved  from './components/ADomainReserved.vue';


const install = function (Vue, options) {


      console.log(Vue.options);
      // if website founded
      if (options.coreVue.store.state.appInstance.design.AppDrawer) {
        // register some component which needed for create settings navigation drawer
        Vue.component(DesignTabsBlock.name, DesignTabsBlock);
        Vue.component(DesignSettingsNavigation.name, DesignSettingsNavigation);

        // add navigator drawer as default component in  renderList
        if (options.coreVue.renderList) {
            options.coreVue.renderList.push(DesignSettingsNavigation.name);
        }
        // add all settings blocks to components;
        for (var name in SettingsBlocks ) {
          Vue.component(name, SettingsBlocks[name]);
        }


      } else {
        //if website not founded
        options.coreVue.render = function(h) {
          return h( ADomainReserved);
        }
      }

}


export default {
  install
}
