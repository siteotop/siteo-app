import  _find  from 'lodash/find';
import  _findIndex from 'lodash/findIndex';
import  _maxBy from 'lodash/maxBy';
//ar _maxBy = require('lodash/maxBy');

const MUTATIONS = {
  addItem(state, item) {
     state.objects.push(item);
     ++state.pagination.servercount;
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


  savePagination(state, serverPagination) {
    for(var i in state.pagination) {
       if (serverPagination [i]) {
         state.pagination[i] = serverPagination [i];
       }
    }

  },

  saveList(state, items) {

      if (items&&items !=null) {
         for(var i in items) {
            state.objects.push(items[i]);
         }
      }

  },

  saveAdditional(state, object) {
      state.additional = object;
  },

  clearList(state, items) {
    //  state.objects = [];
      while(state.objects.length > 0) {state.objects.pop();}

  }
};


const ACTIONS = {


  /**
    get list from model  by paramtrs
  */
  getList({dispatch, commit, getters, state}, params) {

     var  config = {params: params};
     config.method = 'GET';
     config.url = getters.urlWithoutId;
     return   dispatch('callAPI', config, {root:true}).then(response=>{
          state.firstLoaded = true;
          if (params ) {
            if ( !params['append']) {
                commit('clearList');
            }

            if (response.data.additional) {
              commit('saveAdditional', response.data.additional);
            }

          }
          commit('saveList', response.data.items);
          commit('savePagination', response.data.pagination );


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


    /**
      search object in items.
      If not found in loaded items and state.getfullObjectFromServer = false
    */
    searchObjectInItems({state, dispatch,  getters, commit}, id_object) {

        // must load full one object from server
       if (state.getfullObjectFromServer ) {
           return dispatch('getObject', id_object);
       }


       console.log(id_object);
       var result = _find(state.objects,  function(o) { return o[getters.nameId] == id_object; } );
       console.log(result );
       if (result) {
          //commit('setApiId', id_object);
          commit('setModel', result);
         return result;
       } else {
         return dispatch('getObject', id_object);
         //throw { error_message: 'not found'};
       }

    }

};

const GETTERS = {

  pagination(state) {
     return state.pagination;
  }
};


export default function (configItems) {

  return  {
      //namespaced: true,
      state: {
        //
        firstLoaded: false,
        additional: {},
        pagination: {
            limit: 10,
            offset: 0,
            servercount: 0,
        },
        objects: [],

        //scipt needs send request for getting full object from server
        getfullObjectFromServer: configItems.getfullObjectFromServer|| false
      },

      mutations: MUTATIONS,
      actions: ACTIONS,
      getters: GETTERS
    }
}
