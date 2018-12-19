
// PageHelper
import PageSchema from './components/Pages/Schema/index';
import SectionWrap from './components/Pages/Schema/SectionWrap.vue';
import SectionListWrap from './components/Pages/Schema/SectionListWrap.vue';
import SiteoRoutes from './routes';
import * as StoreModules from  './store/modules';

//import {createStorePage, createServices, createExperts, createPosts} from './models.js';

export default {
  install: function (Vue, options) {
      Vue.component('PageSchema', PageSchema);
      Vue.component('SectionWrap', SectionWrap);
      Vue.component('SectionListWrap', SectionListWrap);
  },

  siteoInstall: function ($coreVue, $pluginOptions) {
    // add routes
    $coreVue.router.addRoutes(SiteoRoutes($pluginOptions.template.routes));
    // add templates
    $coreVue.SiteoAddPlugin($pluginOptions.template);

    // register main module for Page
    $coreVue.registerStoreModule(
      'APP_PAGE',
      StoreModules.pages('WEBSITE_API_URL')
    );
    // register  module order to  instance
    $coreVue.registerStoreModule(
      ['APP_INSTANCE', 'order'],
      StoreModules.orders()
    );

    // merge messages from instance
    $coreVue.i18n.mergeLocaleMessage($pluginOptions.instance.data.lang, {routes: $pluginOptions.instance.routes} );


    ['services', 'experts',  'posts'].map(function(ListOption) {
      if ($pluginOptions.instance[ListOption]&&$pluginOptions.instance[ListOption].items) {
         var name = 'APP_'+ListOption.toUpperCase();
         $coreVue.registerStoreModule(name, StoreModules[ListOption]('WEBSITE_API_URL'));
         $coreVue.store.commit(name+'/saveList', $pluginOptions.instance[ListOption].items );
      }
    })
  },

  options: {
    instance: {},
    messages: {},
    template:{}
  }

}
