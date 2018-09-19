import  _find  from 'lodash/find';
import  _findIndex from 'lodash/findIndex';
import  _maxBy from 'lodash/maxBy';
//ar _maxBy = require('lodash/maxBy');

const createItems = function (items) {

  return  {
      //namespaced: true,

      state: {
        objects: [],
        crudLoaded: false,
        getfullObjectFromServer: items.getfullObjectFromServer|| false
      },



      mutations: {
        addItem(state, item) {
           state.objects.unshift(item);
        },

        /**
          remove one element from state.objects
          data.name is  name of search field
          data.id  value of search field
        */
        removeItem(state, data){
            console.log(data);
          var index = _findIndex(state.objects, [data.name, data.id] );
            console.log(index);
            if (index>-1) {
                state.objects.splice(index, 1);
           }

        },


        changeOneItem(state, data ) {
          var index = _findIndex(state.objects, data.finder);
          for (let i in data.payload ) {
             state.objects[index][i] = data.payload[i];
          }

        },

        saveList(state, items) {

            if (items&&items !=null) {
               for(var i in items) {
                  state.objects.push(items[i]);
               }
            }
            //state.objects = list;
          //  state.firstLoaded = true;
        },

        clearList(state, items) {
            state.objects = [];
        }
      },

      actions: {


        /**
          get list from model  by paramtrs
        */
        getList({dispatch, commit, getters, state}, data) {


           var  config = {data: data};
           config.method = 'GET';
           config.url = getters.urlWithoutId;
           return   dispatch('callAPI', config, {root:true}).then(response=>{
                //commit('updateModel', config.data);
                state.crudLoaded = true;
                commit('saveList', response.data.items);


                // save in Api list
                return state.objects;
           });

        },

        /**
          get list from model  by paramtrs
        */

         createObjectInList({dispatch, commit}, data) {

              return  dispatch('createObject', data).then(response=>{
                  commit('addItem', response.data);
                  return response;
                });


         },

         updateObjectInList({dispatch, state, getters,  commit}, data) {
           // when no active object, we need set _payload and id for  object will be change
           if (!getters.activeId) {
             if (data[getters.nameId]) {
                commit('setApiId', data[getters.nameId]);
                delete data[getters.nameId];

             }

           }
           return  dispatch('updateObject', data).then(response=>{
                commit('changeOneItem', { payload: response, finder:  [getters.nameId, getters.activeId]});
                return response;
             });

         },

         patchObjectInList({dispatch, state, getters,  commit}, id) {
           commit('setApiId', id);
           return  dispatch('patchObject').then(response=>{
                commit('changeOneItem', { payload: {patched: 1}, finder:  [getters.nameId, getters.activeId]});
                return response;
             });

         },



         updateGroupInList() {

         },

         deleteGroupInList({dispatch, state, getters,  commit}, tids) {

           var  config = {};
           config.data = {tids: tids };
           config.method = 'DELETE';
           config.url = getters.urlWithoutId;
           return   dispatch('callAPI', config, {root:true}).then(response=>{
                for (var i in tids) {
                  commit('removeItem', {name:getters.nameId, id: tids[i]});
                }
              //  commit('clearModel', config.data);
                return response;
           });

         },

         deleteFromItems({dispatch, state, getters, commit}, tid) {

              if (Array.isArray(tid)) {
                  return  dispatch('deleteGroupInList', tid);
              }

              commit('setApiId', tid);
              return  dispatch('deleteObject', tid).then(response=>{
                  commit('removeItem', {name:getters.nameId, id: tid });
                  return state.objects;
                });
          },


          searchObjectInItems({state, dispatch,  getters, commit}, id_object) {
                // var findObject = {};
                // findObject[getters.nameId] = id_object;
                 if (state.getfullObjectFromServer || !state.crudLoaded) {
                     return dispatch('getObject', id_object);
                 }

                 console.log(id_object);
                 var result = _find(state.objects,  function(o) { return o[getters.nameId] == id_object; } );
                 console.log(result );
                 if (result) {
                    commit('setApiId', id_object);
                    commit('updateModel', result);
                   return result;
                 } else {
                   throw { error_message: 'not found'};
                 }

          }

      },

      getters: {

        lastTid(state, getters) {
            var result;
            if (getters.countItems>0) {
              result = _maxBy(state.objects,  getters.nameId);
              return result[getters.nameId];
            } else {
              return false;
            }


        },

        countItems (state) {
          //console.log(state);
          //console.log(state.objects);
          return state.objects.length;
        }
      }





  }


}

export default createItems;
