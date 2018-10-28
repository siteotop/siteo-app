import Vuex from 'vuex';

import SystemMessages from './messages.js';

//import i18n from './i18n.js';

import createInstance from './appInstance.js';
import {createStorePage, createServices, createExperts } from './models.js';
import { actions}  from './helpers/api-actions';

/**
  @param Vue
  @param APP_INSTANCE - website structure
  @param appDns - some additional  settings for  website

*/
export default function (Vue, APP_INSTANCE, appDns )  {
       Vue.use(Vuex);
       var store =  new Vuex.Store({
         state: {
           drawer: false,
           pageLoader: false
         },

         mutations: {
            startPageLoader(state) {
                state.pageLoader = true;
            },

            stopPageLoader(state) {
                state.pageLoader = false;
            },

            openDrawer(state) {
                 state.drawer = true;
             },

            closeDrawer(state) {
                 state.drawer = false;
             }
         },
         modules: {
           APP_INSTANCE: createInstance (APP_INSTANCE, appDns ),
           APP_PAGE: createStorePage('WEBSITE_API_URL'),

           //APP_EXPERTS: createExperts ('WEBSITE_API_URL'),
           SystemMessages,

         },

         actions: actions
       });

       if (APP_INSTANCE.services&&APP_INSTANCE.services.items) {
          store.registerModule('APP_SERVICES', createServices('WEBSITE_API_URL'));
          store.commit('APP_SERVICES/saveList', APP_INSTANCE.services.items );
       }

       if (APP_INSTANCE.experts&& APP_INSTANCE.experts.items) {
          store.registerModule('APP_EXPERTS', createServices('WEBSITE_API_URL'));
          store.commit('APP_EXPERTS/saveList', APP_INSTANCE.experts.items );
       }


       return store;

}
