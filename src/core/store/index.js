import Vuex from 'vuex';
import {createRESTApi} from 'core/http/rest-api.js';
import SystemMessages from './messages.js';

//import i18n from './i18n.js';

import createInstance from './appInstance.js';
import {createStorePage, createServices, createExperts, createPosts} from './models.js';
//import { actions}  from './helpers/api-actions';

/**
  @param Vue
  @param APP_INSTANCE - website structure

*/
export default function (Vue, APP_INSTANCE)  {

       Vue.use(Vuex);
       var RESTApi = createRESTApi(APP_INSTANCE.configs.api_url);
       var store =  new Vuex.Store({
         state: {
           drawer: false,
           pageLoader: false,
           public_token: APP_INSTANCE.configs.public_token,
           usePablicToken: true,
           dispatchGetToken: 'NAME_MODULE/action' // for example "account/refreshToken"
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
           APP_INSTANCE: createInstance (APP_INSTANCE),
           APP_PAGE: createStorePage('WEBSITE_API_URL'),

           //APP_EXPERTS: createExperts ('WEBSITE_API_URL'),
           SystemMessages,

         },

         actions: {

           callAPI({dispatch, state, getters, rootGetters}, APIconfig) {

              if (state.usePablicToken) {
                APIconfig.access_token = state.public_token;
                return  dispatch('callCoreApi', APIconfig );
              } else {
                console.log(state.dispatchGetToken);
              }

           },

           callCoreApi({dispatch}, APIconfig ) {

             return  RESTApi({
                method: APIconfig.method,
                url: APIconfig.url,
                data: APIconfig.data,
                headers: {'common': { 'Authorization':"Bearer "+ APIconfig.access_token }},
                params: APIconfig.params,
                withCredentials: true
               //  responseType:'stream'
             }).catch (error=>{

                   console.log(error);
                   dispatch('generateSystemMessageRespone', error, { root: true });
              });

           }
         }
       });


       //connect and fill additional stores

       [
         {n:'services', f:createServices},
         {n:'experts', f:createExperts},
         {n:'posts', f:createPosts }
        // {n: 'locations',f:createLocations}
       ].map(function(ListOption) {
         if (APP_INSTANCE[ListOption.n]&&APP_INSTANCE[ListOption.n].items) {
            var name = 'APP_'+ListOption.n.toUpperCase();
            store.registerModule(name, createServices('WEBSITE_API_URL'));
            store.commit(name+'/saveList', APP_INSTANCE[ListOption.n].items );
         }
       })

       return store;

}
