
import API from 'core/store/helpers/model-api.js'
import createItems from 'core/store/helpers/model-items.js'

/**
  @return  String Data fo Sending to The server
*/

const prepareData = function (data) {
      for (let i in data) {
           if ( typeof(data[i]) =='object') {
              data[i] = JSON.stringify((data[i]));
           }
      }
      return data;
}


const createModelCRUD = function (object, turnOnList) {

    if (turnOnList!==false) {
        turnOnList = true;
    }


    if (!object.api.nameId) {
       object.api.nameId = '_id';
    }

    var modules = {};
    modules.api = API(object.api);
    if (turnOnList) {
      modules.items = createItems((object.items||{}));
    }

    return {
        namespaced: true,
        state: function () {
          //  console.log(object.state);
            var _state =  object.state();
            _state[object.api.nameId] = 0;
            return { objectActive: _state } ;
        },

        modules: modules,

        mutations: {

          updateModel(state, object) {

            //  console.log(object)
              for (let key in object) {
                if (state.objectActive[key]!==undefined) {
                    state.objectActive[key] = object[key];

                }
              }
          },

          clearModel(state) {
            var _plainState =  object.state();

            for (let key in _plainState) {
                  state.objectActive[key] = _plainState[key];
            }
            // clear from module Api
            state.api.id = 0;
            state.objectActive[state.api.nameId]  = 0;
          }



        },

        actions: {
            /**

              create object in model API
            */
            createObject({dispatch, state, getters}, data) {
               var  config = {data: prepareData(data)};
               config.method = 'POST';
               config.url = getters.urlWithoutId+ '/0';
               return  dispatch('callAPI', config,  {root:true});

            },

            /**
                get object from model APi
            */
            getObject({dispatch, commit, getters, state}, id) {
               // console.log(this);

               var config = {};
               config.method = 'GET';
               config.url =  getters.urlWithoutId+ '/'+ id;  // '/users/me';
               return   dispatch('callAPI', config, {root:true}).then(response=>{
                       commit('setApiId', id);
                       commit('updateModel', response.data);
                       return state.objectActive;
                       //return response.data;
                    }
               );
            },

            /**
                get object from model APi
            */
            getPublicObject({dispatch, commit, getters, state}, id) {
               // console.log(this);

               return   dispatch('callPublicApi', getters.urlWithoutId+ '/'+ id, {root:true}).then(response=>{
                       commit('setApiId', id);
                       commit('updateModel', response.data);
                       return state.objectActive;
                    }
               );
            },

            /**
                upadete  object in model APi  and update in store
            */
            updateObject({dispatch, commit, getters}, data) {
               var  config = {data: prepareData(data) };
               config.method = 'PUT';
               config.url = getters.urlID;
               return   dispatch('callAPI', config, {root:true}).then(response=>{
                    commit('updateModel', response.data);
                    return response.data;
               });

            },

            patchObject({dispatch, commit, getters}) {
               var  config = {};
               config.method = 'PATCH';
               config.url = getters.urlID;
               return   dispatch('callAPI', config, {root:true}).then(response=>{
                    commit('updateModel', {pathed: 1});
               });
            },

            /**
              remove one object from Model
            */
            deleteObject({dispatch, commit, getters},  id) {
                //commit('setApiId', id);
                var  config = {};
                config.method = 'DELETE';
                config.url = getters.urlWithoutId+ '/'+ id;
                return   dispatch('callAPI', config, {root:true}).then(response=>{
                     commit('clearModel');
                     return response;
                });

            },

            clearAllFromStore({ commit, state}) {

              commit('clearModel');
              if (state.items) {
                  commit('clearList' );
              }


            },





            ...object.actions
        },

        getters: {

          ...object.getters
        }



    }


}



export {createModelCRUD}
