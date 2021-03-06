import Vuex from 'vuex';

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

export default function (Vue, configs)  {
      const REGISTER={};

       Vue.use(Vuex);

       var store =  new Vuex.Store({
         state: {
           drawer: false,
           drawerBody: false,
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

            toogleDrawer(state, value) {

                if (value!==undefined) {
                    state.drawer = value;
                } else {
                    state.drawer =  !state.drawer;
                }

                 if (!state.drawerBody &&state.drawer) {
                   state.drawerBody = true;
                 }
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


           PATH_ICON() {
             return configs.icon_path || process.env.PATH_ICON;
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
                    if (access_token) {
                      APIconfig.headers.common = {
                        'Authorization':"Bearer "+ access_token
                      };
                    }

                    return  dispatch('callCoreApi', APIconfig );
              })

           },

           callCoreApi({dispatch}, APIconfig ) {

              return import(
                /* webpackChunkName: "axios-fetch" */
                /* webpackMode: "lazy" */
                '../http/rest-api.js' ).then(function(module){

                 var RESTApi = module.createRESTApi(configs.host_api||process.env.HOST_API, dispatch);
                 return  RESTApi({
                    method: APIconfig.method||'GET',
                    url: APIconfig.url,
                    data: APIconfig.data,
                    headers: APIconfig.headers,
                    params: APIconfig.params,
                    withCredentials: true

                 })
              })

             //APIconfig.headers


           }
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
