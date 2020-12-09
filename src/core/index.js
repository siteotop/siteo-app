//import "@babel/polyfill";

import Vue from 'vue'; //1 include vue



/**VUE-META
  for  manage <title> and others <head> html elements
*/
import Meta from 'vue-meta'
Vue.use(Meta);

/**I18N */
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);


import {pluginUpdateVuetify, helperOptionsVuetify} from './vue-plugins/UpdateVuetify';
import pluginSiteoPlugin from './vue-plugins/SiteoPlugin';
Vue.use(pluginUpdateVuetify);
Vue.use(pluginSiteoPlugin);
/**
  main object for template
*/
import CoreVue from './components/App.vue';





import * as CoreComponents from  './components';
for (let NameComponent in CoreComponents) {
   Vue.component(NameComponent, CoreComponents[NameComponent]);
}

Vue.component('AppErrorResponse', ()=> import( /* webpackChunkName: "alerts" */ './components/Elements/AppErrorResponse/index.vue'));
Vue.component('AppConfirm', ()=> import( /* webpackChunkName: "alerts" */ './components/Elements/AppConfirm.vue'));
Vue.component('AppMessagesBlock', ()=> import( /* webpackChunkName: "alerts" */ './components/Elements/AppMessagesBlock'));

Vue.component('SiteoPluginForms', ()=> import( /* webpackChunkName: "plugin-form" */ './components/Plugins/forms/index.vue'));
Vue.component('SiteoPluginSelectItems', ()=> import( /* webpackChunkName: "plugin-items" */ './components/Plugins/select-items/component.vue'));
Vue.component('ErrorPage',   ()=>import( /* webpackChunkName: "page-error" */ './components/Routes/Error.vue'));

Vue.component('PYv', ()=> import( /* webpackChunkName: "YoutubeVideo" */ './components/Structure/PYoutubeVideo.vue'));
Vue.component('DialogVideoYoutube',  ()=> import( /* webpackChunkName: "YoutubeVideo" */ './components/Elements/VideoYoutube.vue'));

Vue.component('ShareWindow',  ()=>import(/* webpackChunkName: "ShareSave" */'./components/Elements/Share/Window.vue'));



import {createRESTApi} from './http/rest-api.js';


/**ROUTER
   create Routing for every APP
*/
import createRouter from './router';

/**Vue Store
  Storing all data from backend
*/
import createStore from './store';

/**SYNC router with store
  in Vue store we can get 'route' property
*/
import { sync } from 'vuex-router-sync';




/****VUETIFY
  Vuetify Material Design Component Framework
  https://vuetifyjs.com/ru/
*/
import Vuetify, {

  VApp,
  VResponsive,
  VAvatar,
  VBadge,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VBtn,
  VBtnToggle,
  VMain,
  VCard,
  VCardActions,
  VCardSubtitle,
  VCardText,
  VCardTitle,
  VChip,
  VDivider,
  VFooter,
  VContainer,
  VRow,
  VCol,
  VSpacer,
  VHover,
  VIcon,
  VImg,
  VLazy,
  VList,
  VListGroup,
  VListItem,
  VListItemAction,
  VListItemActionText,
  VListItemAvatar,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VListItemSubtitle,
  VListItemTitle,
  VMenu,
  VNavigationDrawer,
  VSheet,
  VSkeletonLoader,
  VSubheader,
  VProgressLinear,
  VProgressCircular,
  VStepperItems,
  VStepperHeader,
  VFabTransition,
  VSlideXTransition,
  VPagination,
  VBreadcrumbs,
  VBreadcrumbsItem,
  VExpandTransition

} from 'vuetify/lib'
import { Ripple, Scroll, Touch, Resize, Mutate, Intersect } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {

    VApp,
    VResponsive,
    VAvatar,
    VBadge,
    VAppBar,
    VAppBarNavIcon,
    VToolbar,
    VToolbarTitle,
    VMain,
    VBtn,
    VBtnToggle,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle,
    VChip,

    VDivider,
    VFooter,

    VContainer,
    VRow,
    VCol,
    VSpacer,
    VHover,
    VIcon,
    VImg,
    VLazy,
    VList,
    VListGroup,
    VListItem,
    VListItemAction,
    VListItemActionText,
    VListItemAvatar,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VListItemSubtitle,
    VListItemTitle,
    VMenu,
    VNavigationDrawer,
    VBreadcrumbs,
    VBreadcrumbsItem,
    VSheet,
    VSkeletonLoader,
    VSubheader,
    VProgressLinear,
    VProgressCircular,
    VDialog: ()=> import( /* webpackChunkName: "dialog" */ 'vuetify/lib/components/VDialog/VDialog'),
    VAlert: ()=> import( /* webpackChunkName: "alerts" */ 'vuetify/lib/components/VAlert/VAlert'),
    VSnackbar: ()=> import( /* webpackChunkName: "alerts" */ 'vuetify/lib/components/VSnackbar/VSnackbar'),
    VTextField: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VTextField/VTextField'),
    VTextField: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VTextField/VTextField'),
    VTextarea: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VTextarea/VTextarea'),
    VSwitch: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VSwitch/VSwitch'),
    VCheckbox: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VCheckbox/VCheckbox'),
    VRadio: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VRadioGroup/VRadio'),
    VRadioGroup: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VRadioGroup/VRadioGroup'),
    VCombobox: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VCombobox/VCombobox'),
    VSimpleCheckbox: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VCheckbox/VSimpleCheckbox'),
    VAutocomplete: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VAutocomplete/VAutocomplete'),
    VFileInput: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VFileInput/VFileInput'),
    VInput: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VInput/VInput'),
    VSelect: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VSelect/VSelect'),
    VOverflowBtn: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VOverflowBtn/VOverflowBtn'),
    VSlider: ()=> import( /* webpackChunkName: "inputs-form" */ 'vuetify/lib/components/VSlider/VSlider'),

    VItemGroup: ()=> import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VItemGroup/VItemGroup'),
    VWindow: ()=> import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VWindow/VWindow'),
    VCarousel: ()=> import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VCarousel/VCarousel'),
    VCarouselItem:  ()=> import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VCarousel/VCarouselItem'),
    VParallax: ()=>import( /* webpackChunkName: "parallax" */ 'vuetify/lib/components/VParallax/VParallax'),

    VTab: ()=>import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VTabs/VTab'),
    VTabs: ()=>import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VTabs/VTabs'),
    VTabItem: ()=>import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VTabs/VTabItem'),
    VTabsItems: ()=>import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VTabs/VTabsItems'),
    VTabsSlider: ()=>import( /* webpackChunkName: "carusel" */ 'vuetify/lib/components/VTabs/VTabsSlider'),

    VTooltip: ()=>import( /* webpackChunkName: "tooltip" */ 'vuetify/lib/components/VTooltip/VTooltip'),
    VDataTable: ()=>import( /* webpackChunkName: "tables" */ 'vuetify/lib/components/VDataTable/VDataTable'),
    VSimpleTable: ()=>import( /* webpackChunkName: "tables" */ 'vuetify/lib/components/VDataTable/VSimpleTable'),

    VDatePicker:()=>import( /* webpackChunkName: "pickers" */ 'vuetify/lib/components/VDatePicker/VDatePicker'),
    VTimePicker:()=>import( /* webpackChunkName: "pickers" */ 'vuetify/lib/components/VTimePicker/VTimePicker'),

    VStepper:()=>import( /* webpackChunkName: "stepper" */ 'vuetify/lib/components/VStepper/VStepper'),
    VStepperContent:()=>import( /* webpackChunkName: "stepper" */ 'vuetify/lib/components/VStepper/VStepperContent'),
  //  VStepperHeader:()=>import( /* webpackChunkName: "stepper" */ 'vuetify/lib/components/VStepper/VStepperHeader'),
    VStepperStep:()=>import( /* webpackChunkName: "stepper" */ 'vuetify/lib/components/VStepper/VStepperStep'),
    VPagination,
    VStepperItems,
    VStepperHeader,

  //  VStepperItems:()=>import( /* webpackChunkName: "stepper" */ 'vuetify/lib/components/VStepper/VStepperItems'),

    VFabTransition,
    VExpandTransition,
    VSlideXTransition,
    VExpansionPanel:()=> import( /* webpackChunkName: "expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanel'),
    VExpansionPanels:()=> import( /* webpackChunkName: "expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanels'),
    VExpansionPanelContent:()=> import( /* webpackChunkName: "expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanelContent'),
    VExpansionPanelHeader:()=> import( /* webpackChunkName: "expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader'),
    VTimeline:()=> import( /* webpackChunkName: "timeline" */ 'vuetify/lib/components/VTimeline/VTimeline'),
    VTimelineItem:()=> import( /* webpackChunkName: "timeline" */ 'vuetify/lib/components/VTimeline/VTimelineItem')
  },

  directives: {
    Ripple,
    Scroll,
    Touch,
    Resize,
    Mutate,
    Intersect
  },
})

//import 'vuetify/dist/vuetify.min.css';


/**CSS*/

require('./style/common.css')

import {vuetifyIcons} from './icons';



import axios from 'axios';
CoreVue.axios = axios;


import SiteoRoutes from './routes';

/**
start Siteo
*/
export const createSiteo =  function ({configs, client}) {

   var AppInstanse = {};
   AppInstanse._plugins = {};

   var vuetifyOptions =   {
      icons: {
        iconfont: 'md',  // default
        values: vuetifyIcons
      },

      theme: {
        themes: {
          light:{},
          dark: {}
        },
        dark: false
      }
   };
   if (client) {
      if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.appInstance.objectActive.design.Vtf ) {
        helperOptionsVuetify(vuetifyOptions, window.__INITIAL_STATE__.appInstance.objectActive.design.Vtf);
      }

   }

   AppInstanse.vuetify = new Vuetify(vuetifyOptions);



   // plugin for http requests
   var RESTApi = createRESTApi(configs.host_api||process.env.HOST_API);
   // create store
   AppInstanse.store = createStore(Vue, RESTApi, configs);

   // create router
   AppInstanse.router = createRouter(Vue, AppInstanse.store, configs.baseUrl )

   //sync router with store for access route from store
   sync(AppInstanse.store, AppInstanse.router);


   // connect routes translating to all messages
   //APP.options.messages[APP.options.instance.data.lang].routes = APP.options.instance.routes;
   // Create VueI18n instance with options
   AppInstanse.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: configs.lang, // app lang
      //messages: messages // set locale messages
    });

    import(/* webpackChunkName: "locale-[request]" */ './i18n/'+ configs.lang).then(({default:local}) => {
        //console.log(local);
        AppInstanse.i18n.mergeLocaleMessage(configs.lang, local);
    }).catch(error => {console.log(error)});
    AppInstanse.extends = CoreVue;
    if (client&&configs.plugins) {
       for (var pluginName in configs.plugins ) {
          if (window[configs.plugins[pluginName]])
          Vue.prototype.registerSiteoPlugin(pluginName, window[configs.plugins[pluginName]], AppInstanse);
       }
    }

    AppInstanse.router.addRoutes(SiteoRoutes(configs||{}));

    return  new Vue( AppInstanse );


}
