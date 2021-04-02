//import "@babel/polyfill";

import "core-js/stable";
import "regenerator-runtime/runtime"


import Vue from 'vue'; //1 include vue

/**VUE-META
  for  manage <title> and others <head> html elements
*/
import Meta from 'vue-meta'
Vue.use(Meta);

/**I18N */
//import VueI18n from 'vue-i18n';
//Vue.use(VueI18n);


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


Vue.component('AppErrorResponse', ()=> import(
    /* webpackChunkName: "siteo-alerts" */
   './components/Elements/AppErrorResponse/index.vue'));

Vue.component('AppConfirm', ()=> import(
  /* webpackChunkName: "siteo-alerts" */
  './components/Elements/AppConfirm.vue'));

Vue.component('AppMessagesBlock', ()=> import(
  /* webpackChunkName: "siteo-alerts" */
  './components/Elements/AppMessagesBlock'));

Vue.component('SiteoPluginForms', ()=> import(
  /* webpackChunkName: "plugin-form" */
  './components/Plugins/forms/index.vue'));

Vue.component('ErrorPage',   ()=>import(
  /* webpackChunkName: "page-error" */
  './components/Routes/Error.vue'));

Vue.component('PYv', ()=> import(
  /* webpackChunkName: "siteo-youtube" */
  './components/Structure/PYoutubeVideo.vue'));

Vue.component('DialogVideoYoutube',  ()=> import(
  /* webpackChunkName: "siteo-youtube" */
  './components/Elements/VideoYoutube.vue'));

Vue.component('ShareWindow',  ()=>import(
  /* webpackChunkName: "siteo-share" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */
  './components/Elements/Share/Window.vue'));

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
  import { sync } from 'vuex-router-sync';

*/

/****VUETIFY
  Vuetify Material Design Component Framework
  https://vuetifyjs.com/ru/
*/
import Vuetify, {

  VApp,
  VResponsive,
  VAvatar,
  VAppBar,
  VAppBarNavIcon,
  VToolbar,
  VToolbarTitle,
  VBtn,
  VMain,
  VCard,
  VCardActions,
  VCardSubtitle,
  VCardText,
  VCardTitle,
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

    VAppBar,
    VAppBarNavIcon,
    VToolbar,
    VToolbarTitle,
    VMain,
    VBtn,
    VCard,
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle,
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
    VPagination,
    VFabTransition,
    VExpandTransition,
    VSlideXTransition,

    VBadge: ()=> import( /* webpackChunkName: "vtf-elements" */ 'vuetify/lib/components/VBadge/VBadge'),
    VChip: ()=> import( /* webpackChunkName: "vtf-elements" */ 'vuetify/lib/components/VChip/VChip'),

    VProgressLinear: ()=> import( /* webpackChunkName: "vtf-progress" */ 'vuetify/lib/components/VProgressLinear/VProgressLinear'),
    VProgressCircular: ()=> import( /* webpackChunkName: "vtf-progress" */ 'vuetify/lib/components/VProgressCircular/VProgressCircular'),



    VDialog: ()=> import( /* webpackChunkName: "vtf-dialog" */ 'vuetify/lib/components/VDialog/VDialog'),

    VAlert: ()=> import( /* webpackChunkName: "vtf-alerts" */ 'vuetify/lib/components/VAlert/VAlert'),
    VSnackbar: ()=> import( /* webpackChunkName: "vtf-alerts" */ 'vuetify/lib/components/VSnackbar/VSnackbar'),


    VTextField: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VTextField/VTextField'),
    VTextField: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VTextField/VTextField'),
    VTextarea: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VTextarea/VTextarea'),


    VSwitch: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VSwitch/VSwitch'),
    VCheckbox: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VCheckbox/VCheckbox'),
    VRadio: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VRadioGroup/VRadio'),
    VAutocomplete: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VAutocomplete/VAutocomplete'),
    VCombobox: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VCombobox/VCombobox'),

    VSimpleCheckbox: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VCheckbox/VSimpleCheckbox'),

    VFileInput: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VFileInput/VFileInput'),
    VInput: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VInput/VInput'),
    VSelect: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VSelect/VSelect'),
    VOverflowBtn: ()=> import( /* webpackChunkName: "vtf-inputs" */ 'vuetify/lib/components/VOverflowBtn/VOverflowBtn'),

    VSlider: ()=> import( /* webpackChunkName: "vtf-slider" */ 'vuetify/lib/components/VSlider/VSlider'),

    ///// GROUPS
    VBtnToggle: ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VBtnToggle/VBtnToggle'),


    VRadioGroup: ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VRadioGroup/VRadioGroup'),


    VItemGroup: ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VItemGroup/VItemGroup'),
    VWindow: ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VWindow/VWindow'),
    VCarousel: ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VCarousel/VCarousel'),
    VCarouselItem:  ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VCarousel/VCarouselItem'),

    VSlideGroup:  ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VSlideGroup/VSlideGroup'),
    VSlideItem:  ()=> import( /* webpackChunkName: "vtf-groups" */ 'vuetify/lib/components/VSlideGroup/VSlideItem'),


    VParallax: ()=>import( /* webpackChunkName: "vtf-parallax" */ 'vuetify/lib/components/VParallax/VParallax'),


    // TABS
    VTab: ()=>import( /* webpackChunkName: "vtf-tabs" */ 'vuetify/lib/components/VTabs/VTab'),
    VTabs: ()=>import( /* webpackChunkName: "vtf-tabs" */ 'vuetify/lib/components/VTabs/VTabs'),
    VTabItem: ()=>import( /* webpackChunkName: "vtf-tabs" */ 'vuetify/lib/components/VTabs/VTabItem'),
    VTabsItems: ()=>import( /* webpackChunkName: "vtf-tabs" */ 'vuetify/lib/components/VTabs/VTabsItems'),
    VTabsSlider: ()=>import( /* webpackChunkName: "vtf-tabs" */ 'vuetify/lib/components/VTabs/VTabsSlider'),
    //TOOLTIP
    VTooltip: ()=>import( /* webpackChunkName: "vtf-tooltip" */ 'vuetify/lib/components/VTooltip/VTooltip'),

    //TABLES
    VDataTable: ()=>import( /* webpackChunkName: "vtf-tables" */ 'vuetify/lib/components/VDataTable/VDataTable'),
    VSimpleTable: ()=>import( /* webpackChunkName: "vtf-tables" */ 'vuetify/lib/components/VDataTable/VSimpleTable'),

    //PICKERS
    VDatePicker:()=>import( /* webpackChunkName: "vtf-pickers" */ 'vuetify/lib/components/VDatePicker/VDatePicker'),
    VTimePicker:()=>import( /* webpackChunkName: "vtf-pickers" */ 'vuetify/lib/components/VTimePicker/VTimePicker'),

    /// STEPPER
    VStepper:()=>import( /* webpackChunkName: "vtf-stepper" */ 'vuetify/lib/components/VStepper/VStepper'),
    VStepperContent:()=>import( /* webpackChunkName: "vtf-stepper" */ 'vuetify/lib/components/VStepper/VStepperContent'),
    VStepperStep:()=>import( /* webpackChunkName: "vtf-stepper" */ 'vuetify/lib/components/VStepper/VStepperStep'),
    //VStepperItems:()=>import( /* webpackChunkName: "vtf-stepper" */ 'vuetify/lib/components/VStepperItems/VStepperItems'),
    //VStepperHeader:()=>import( /* webpackChunkName: "vtf-stepper" */ 'vuetify/lib/components/VStepperHeader/VStepperHeader'),

    /// EXPANSION
    VExpansionPanel:()=> import( /* webpackChunkName: "vtf-expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanel'),
    VExpansionPanels:()=> import( /* webpackChunkName: "vtf-expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanels'),
    VExpansionPanelContent:()=> import( /* webpackChunkName: "vtf-expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanelContent'),
    VExpansionPanelHeader:()=> import( /* webpackChunkName: "vtf-expansion" */ 'vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader'),

    //TIMELINES
    VTimeline:()=> import( /* webpackChunkName: "vtf-timeline" */ 'vuetify/lib/components/VTimeline/VTimeline'),
    VTimelineItem:()=> import( /* webpackChunkName: "vtf-timeline" */ 'vuetify/lib/components/VTimeline/VTimelineItem')
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




   // create store
   AppInstanse.store = createStore(Vue, configs);

   // create router
   AppInstanse.router = createRouter(Vue, AppInstanse.store, configs.baseUrl )

   //sync router with store for access route from store
   //sync(AppInstanse.store, AppInstanse.router);


   // connect routes translating to all messages
   //APP.options.messages[APP.options.instance.data.lang].routes = APP.options.instance.routes;
   // Create VueI18n instance with options
  /* AppInstanse.i18n = new VueI18n({
      silentTranslationWarn: process.env.NODE_ENV === 'development'? false: true, // silent log
      locale: configs.lang, // app lang
      //messages: messages // set locale messages
    });*/

    /*import( webpackChunkName: "locale-[request]"  './i18n/'+ configs.lang).then(({default:local}) => {
        //console.log(local);
        AppInstanse.i18n.mergeLocaleMessage(configs.lang, local);
    }).catch(error => {console.log(error)});
    */

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
