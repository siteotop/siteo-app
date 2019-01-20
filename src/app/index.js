
// PageHelper

import PageSchema from './components/Pages/Schema/index';
import SectionWrap from './components/Pages/Schema/SectionWrap.vue';
import SectionListWrap from './components/Pages/Schema/SectionListWrap.vue';
import SiteoRoutes from './routes';

import moduleOrder from './store/modules/orders';
//import {createStorePage, createServices, createExperts, createPosts} from './models.js';

export default {
  install: function (Vue, options) {
      Vue.component('PageSchema', PageSchema);
      Vue.component('SectionWrap', SectionWrap);
      Vue.component('SectionListWrap', SectionListWrap);

  },

  siteoInstall: function ($coreVue, $pluginOptions) {
    // add routes
    var routes =  {
      services: {route: '/services', title:'Services'},
      experts: {route: '/experts', title:'People'},
      posts: {route: '/blog', title:'Blog'},
      objectService: {title: '{title} - Order item', description: '{actionText} {title}, Price {price}'},
    };
    $coreVue.router.addRoutes(SiteoRoutes($pluginOptions.template.routes));
    // add templates
    $coreVue.SiteoAddPlugin($pluginOptions.template);

    // register  module order to  instance

     $coreVue.store.registerApiModule(
      ['APP_ORDER'],
       moduleOrder('WEBSITE_API_URL')
    );

    // merge messages from instance
    $coreVue.i18n.mergeLocaleMessage($coreVue.i18n.locale, {routes: routes} );

  },

  options: {
    template:{}
  }

}
