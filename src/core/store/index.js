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

export default function (Vue, RESTApi, configs)  {
      const REGISTER={};

       Vue.use(Vuex);

       var store =  new Vuex.Store({
         state: {
           drawer: false,
           allowAsyncLoad: true, // During first load after SSR we need turn off async load data from API
           pageLoader: false,
           usePablicToken: true,
           srvPageErr: false, //Full Error for Page or another route
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
            },
            setSrvPageErr(state, objectError) {
                 state.srvPageErr = objectError;
            },
            clearSrvPageErr(state) {
               if (state.allowAsyncLoad) {
                 state.srvPageErr = false;
               }
            },
         },

         modules: {
            // AppResourse
           appInstance: createModelCRUD(appInstance),
           SystemMessages,


         },
         getters: {


           /**
             generate fullhost for canonical link and others links
             if baseUrl == '/'  will be  only  domain without  end '/'
             @example  'https://domain.com'
             if baseUrl  with path like "/base" will be  domain with path
             @example 'https://domain.com/base'
           */
           CORE_HOST() {
            var fullhost = 'https://'+configs.host;
             if (configs.baseUrl!='/') {
                fullhost+=configs.baseUrl;
             }
             return fullhost;
           },

           getSiteoConfig: ()=>field=> {
              return configs[field];
           }

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
                    if (!APIconfig.headers) {
                      APIconfig.headers = {};
                    }
                    APIconfig.headers.common = {
                      'Authorization':"Bearer "+ access_token
                    };
                    return  dispatch('callCoreApi', APIconfig );
              })

           },

           callCoreApi({dispatch}, APIconfig ) {

             APIconfig.headers
             return  RESTApi({
                method: APIconfig.method||'GET',
                url: APIconfig.url,
                data: APIconfig.data,
                headers: APIconfig.headers,
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
          options: {
              name: String,
              module: Object,
              moduleOptions: Object,
              preserveState: Boolean
          }
        */
       store.registerApiModule = function (options  /*name, module, options, preserveState*/) {
          var _name_register = helperNameRegister(options.name);
          if (!REGISTER[_name_register]) {
                 store.registerModule(options.name, createModelCRUD(options.module, options.moduleOptions), {preserveState: options.preserveState});
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
