
// PageHelper

//import PageSchema from './components/Pages/Schema.js';
//import SiteoRoutes from './routes';



export default {
  name: 'siteo-app',

  install: function (Vue) {
    //  Vue.component('PageSchema', PageSchema);


  },

  siteoInstall: function ($coreVue, $pluginOptions) {

    var routes= {
      'routes_values_t': 'Values',
      'routes_experts_t': 'People',
      'routes_posts_t': 'Blog',
    }



    // merge messages from instance
    $coreVue.i18n.mergeLocaleMessage($coreVue.i18n.locale,  routes );

  }

}
