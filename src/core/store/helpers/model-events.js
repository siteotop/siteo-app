
import API from 'core/store/helpers/model-api.js'
import createItems from 'core/store/helpers/model-items.js'




const createModelCRUD = function (object, turnOnList) {

    if (!object.api.nameId) {
       object.api.nameId = '_id';
    }

    var modules = {};
    modules.api = API(object.api);
    if (turnOnList) {
      modules.items = createItems();
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

        actions: object.actions,

        getters: object.getters



    }


}



export {createModelCRUD}
