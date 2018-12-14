
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
    console.log(StoreModules);
    $coreVue.registerStoreModule( 'APP_PAGE', StoreModules.pages('WEBSITE_API_URL'));



    ['services', 'experts',  'posts'].map(function(ListOption) {
      if (_APP_INSTANCE[ListOption]&&_APP_INSTANCE[ListOption].items) {
         var name = 'APP_'+ListOption.toUpperCase();
         $coreVue.registerStoreModule(name, StoreModules[ListOption]('WEBSITE_API_URL'));
         $coreVue.store.commit(name+'/saveList', _APP_INSTANCE[ListOption].items );
      }
    })
  },

  options: {template:{}}

}
