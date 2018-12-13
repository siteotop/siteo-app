
// PageHelper
import PageSchema from './components/Pages/Schema/index';
import SectionWrap from './components/Pages/Schema/SectionWrap.vue';
import SectionListWrap from './components/Pages/Schema/SectionListWrap.vue';
import SiteoRoutes from './routes';

export default {
  install: function (Vue, options) {
      Vue.component('PageSchema', PageSchema);
      Vue.component('SectionWrap', SectionWrap);
      Vue.component('SectionListWrap', SectionListWrap);
      options.$coreVue.router.addRoutes(SiteoRoutes(options.$pluginOptions.template.routes));
      options.$coreVue.SiteoAddPlugin(options.$pluginOptions.template);

  },

  options: {template:{}}

}
