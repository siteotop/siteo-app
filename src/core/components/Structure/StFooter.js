
import  AppFooterCopyright  from './StCopyright.vue';
import helperCreateStDesign from './_helper/createStDesign.js';

/**
  Footer for website
*/
export default {
    //mixins: [ExtendAppStructure],
    functional: true,
    render(h, context) {

      return  helperCreateStDesign(h, context,
          'StFooter',
          'v-footer',
          {
            app: true,
            height:'auto',
            absolute:true,
            inset:true,
            dark:true,
            color: 'primary darken-4',
          },
          undefined,
          [ h(AppFooterCopyright)]
      );
    }

}
