
import API from 'core/store/helpers/model-api.js'
import createItems from 'core/store/helpers/model-items.js'

const stateHelper = function(state, object) {
  for (let key in object) {
      if (state.objectActive[key]!==undefined) {
          state.objectActive[key] = object[key];
     }
  }
}


const createModelCRUD = function (object, turnOnList ) {

    var modules = {};

    if (object.api !== undefined) {
      if (!object.api.nameId) {
         object.api.nameId = '_id';
      }
      modules.api = API(object.api);
      if (turnOnList) {
        modules.items = createItems();
      }
    }

    return {
        namespaced: true,
        state: function () {
          //  console.log(object.state);
            var _state =  object.state();
            if (object.api) {
              _state[object.api.nameId] = 0;
            }

            return { objectActive: _state } ;
        },

        modules: modules,

        mutations: {

          setModel(state, object) {

             stateHelper(state, object);
             if (state.api) {
                state.api.id = 0;
                state.api.id = state.objectActive[state.api.nameId];
             }

          },

          updateModel(state, object) {
              stateHelper(state, object);
          },

          clearModel(state) {
            var _plainState =  object.state();

            for (let key in _plainState) {
                  state.objectActive[key] = _plainState[key];
            }
            // clear from module Api
            if (state.api) {
              state.api.id = 0;
              state.objectActive[state.api.nameId]  = 0;
            }

          }



        },

        actions: object.actions,

        getters: object.getters



    }


}



export {createModelCRUD}
