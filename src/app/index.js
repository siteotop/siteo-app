
// PageHelper

import PageSchema from './components/Pages/Schema.js';
import StpSection from './components/Pages/Sections/StpSection.vue';
import StpListSection from './components/Pages/Sections/StpListSection.vue';
import SiteoRoutes from './routes';
import RouteError from './components/Error.vue';

export default {
  name: 'siteo-app',

  install: function (Vue) {
      Vue.component('PageSchema', PageSchema);
      Vue.component('StpSection', StpSection);
      Vue.component('StpListSection', StpListSection);
      Vue.component('RouteError', RouteError);
  },

  siteoInstall: function ($coreVue, $pluginOptions) {

    var routes= {
      'routes_values_t': 'Values',
      'routes_experts_t': 'People',
      'routes_posts_t': 'Blog',
    }

    $coreVue.router.addRoutes(SiteoRoutes($pluginOptions||{}));


    // merge messages from instance
    $coreVue.i18n.mergeLocaleMessage($coreVue.i18n.locale,  routes );

  }

}
