import Vuex from 'vuex';

import SystemMessages from 'core/store/messages.js';

import i18n from 'core/store/i18n.js';
import createInstance from 'core/store/instance.js';
import { actions}  from 'core/store/helpers/api-actions';

export default function (Vue, instance )  {
       Vue.use(Vuex);
       return  new Vuex.Store({
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
           instance: createInstance ( instance ),
           SystemMessages,
          // Routes,
           i18n,
         },

         actions: actions
       });

      // return Vue.$store;

}
