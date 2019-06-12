import Vuex from 'vuex';
import {checkObjectResponse} from 'core/http/error-handling.js';
import SystemMessages from './messages.js';
import {createModelCRUD} from './helpers/createModelCRUD'
//import i18n from './i18n.js';
import appInstance from './appInstance.js';



const helperNameRegister = function ( name) {
  if (typeof(name) !='string') {
    return  name.join('/');
  } else {
    return name
  }
}

export default function (Vue, RESTApi, baseUrl)  {
      const REGISTER={};

       Vue.use(Vuex);

       var store =  new Vuex.Store({
         state: {
           drawer: false,
           allowAsyncLoad: true,
           pageLoader: false,
           usePablicToken: true,
           dispacthToken: 'defaultToken' // for example "account/refreshToken"
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

            newDispatchToken(state, value) {

                state.dispacthToken = value;
            }
         },

         modules: {
            // AppResourse
           appInstance: createModelCRUD(appInstance),
           SystemMessages,

         },
         getters: {
           /**
            link for
           */

           CORE_HOST() {
             return  baseUrl||'/';
           },
         },
         actions: {

           // default place public token for siteo-template
           defaultToken() {
              return  '';
           },

           /**
            @param APIconfig configs for callCoreApi
           */
           callAPI({dispatch, state, getters, rootGetters}, APIconfig) {

              return dispatch(state.dispacthToken).then(access_token=>{
                    APIconfig.access_token = access_token;
                    return  dispatch('callCoreApi', APIconfig );
              })

           },

           callCoreApi({dispatch}, APIconfig ) {

             return  RESTApi({
                method: APIconfig.method||'GET',
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
           if (checkObjectResponse(error.response, store)) {
             // common error
             if (error.response.data.error_code=='validatorMessages') {

             } else {
                store.dispatch('generateSystemMessage', {text: `Error ${error.response.data.status
         }: ${error.response.data.error_description}` , type: 'error'});
             }

              return Promise.reject(error);
           }

       });

        /**
          Register module with createModelCRUD
        */
       store.registerApiModule = function (name, module, options) {
          var _name_register = helperNameRegister(name);
          if (!REGISTER[_name_register]) {
                 store.registerModule(name, createModelCRUD(module, options));
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
