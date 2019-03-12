
// PageHelper

import PageSchema from './components/Pages/Schema/index';
import SectionWrap from './components/Pages/Schema/SectionWrap.vue';
import SectionListWrap from './components/Pages/Schema/SectionListWrap.vue';
import SiteoRoutes from './routes';
import RouteError from './components/Error.vue';

import moduleOrder from './store/modules/orders';

export default {
  name: 'siteo-app',

  install: function (Vue, options) {
      Vue.component('PageSchema', PageSchema);
      Vue.component('SectionWrap', SectionWrap);
      Vue.component('SectionListWrap', SectionListWrap);
      Vue.component('RouteError', RouteError);
  },

  siteoInstall: function ($coreVue, $pluginOptions) {
    // add routes

    var routes =  {
      values: {route: '/values', title:'Values'},
      experts: {route: '/experts', title:'People'},
      posts: {route: '/blog', title:'Blog'},
      objectService: {title: '{title} - Order item', description: '{actionText} {title}, Price {price}'},
    };
    $coreVue.router.addRoutes(SiteoRoutes($pluginOptions));

    $coreVue.store.registerApiModule(
      ['APP_ORDER'],
       moduleOrder('WEBSITE_API_URL')
    );

    // merge messages from instance
    $coreVue.i18n.mergeLocaleMessage($coreVue.i18n.locale, {routes: routes} );

  }

}
