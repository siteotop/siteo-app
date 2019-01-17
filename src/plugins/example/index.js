
import ExampleComponent from './component.vue';

export default {

  install: function (Vue, options) {
      Vue.component('siteo-plugin-example', ExampleComponent);
  },

  siteoInstall: function ($coreVue, $pluginOptions) {

  }

}
