import Vuex from 'vuex';
import {createRESTApi} from 'core/http/rest-api.js';
import {checkObjectResponse} from 'core/http/error-handling.js';
import SystemMessages from './messages.js';
import {createModelCRUD} from './helpers/model-events'
//import i18n from './i18n.js';

import createInstance from './appInstance.js';



const helperNameRegister = function ( name) {
  if (typeof(name) !='string') {
    return  name.join('/');
  } else {
    return name
  }
}

export default function (Vue, configs)  {
      const REGISTER={};

       Vue.use(Vuex);
       var RESTApi = createRESTApi(configs.api_url);
       var store =  new Vuex.Store({
         state: {
           drawer: false,
           allowAsyncLoad: true,
           pageLoader: false,
           //recaptcha: configs.recaptcha,
           usePablicToken: true,
           getterToken: 'NAME_MODULE/action' // for example "account/refreshToken"
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
            },

            newGetterToken(state, value) {
                state.usePablicToken = false;
                state.getterToken = value;
            }
         },

         modules: {
           APP_INSTANCE: createInstance (),


           //APP_EXPERTS: createExperts ('WEBSITE_API_URL'),
           SystemMessages,

         },
         getters: {
           CORE_HOST() {
             return  configs.host+configs.path;
           },
         },
         actions: {

           callAPI({dispatch, state, getters, rootGetters}, APIconfig) {

              if (state.usePablicToken) {
                APIconfig.access_token = configs.public_token;
              } else {
                  console.log(state.getterToken);
                APIconfig.access_token = rootGetters[state.getterToken];

              }

              return  dispatch('callCoreApi', APIconfig );

           },

           callCoreApi({dispatch}, APIconfig ) {

             return  RESTApi({
                method: APIconfig.method,
                url: APIconfig.url,
                data: APIconfig.data,
                headers: {'common': { 'Authorization':"Bearer "+ APIconfig.access_token }},
                params: APIconfig.params,
                withCredentials: true

             })

           }
         }
       });


       RESTApi.interceptors.response.use(
         function (response) {
            if (response.status==200) {
                checkObjectResponse(response, store)
            }
            return response;
         },

         function (error) {
           if (!checkObjectResponse(error.response, store)) {

           } else {
              return Promise.reject(error);
           }

       });
       var helperRegister =
       store.registerApiModule = function (name, module, turnOnList) {
          var _name_register = helperNameRegister(name);
          if (!REGISTER[_name_register]) {
                 store.registerModule(name, createModelCRUD(module, turnOnList));
                 REGISTER[_name_register] = true;
          } else {

          }
          console.log(REGISTER);

       };
       store.unregisterApiModule = function (name) {
         var _name_register = helperNameRegister(name);
         if (REGISTER[_name_register]) {
            store.unregisterModule(name);
            REGISTER[_name_register] = false;
         }
       }

       return store;

}
