
//import VeeValidate from 'vee-validate';
import AppForm from './AppForm/index.vue';

const pluginName = 'siteo-plugin-forms';

export default {
  name: pluginName,

  install: function (Vue) {

      Vue.component(pluginName, AppForm);

      //console.log(options.$coreVue.i18n.locale);
      // connect  vee-validator

      /**
      With SSR Frameworks like Nuxt, it is recommended to disable automatic injection since it may cause memory leaks due to all the validator instances being created for every component, which is not needed and may slow down your site.
      https://baianat.github.io/vee-validate/concepts/injections.html#injecting-parent-validator

      */
      /*Vue.use(VeeValidate, {

        inject: false,

        dictionary: false,
        local: options.$coreVue.i18n.locale
       }
     );*/

  }

}
