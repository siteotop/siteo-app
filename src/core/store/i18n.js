

const i18n = {
  state: {
     routes: {},
     global: {},
     veeValidate: {}

  },

  mutations: {

    //set global values
    seti18nGlobals(state, i18n){


          state.routes= i18n.routes;
          state.global= i18n.global;
          state.veeValidate=  i18n.veeValidate;
        /*  for ( let i in i18n) {
              if (state[i]) {
                state[i] = i18n[i];
              }

          }*/

      },

      appendRoutes(state, routes) {

          state.routes = Object.assign(state.routes, routes);


      }


  },


  actions: {


    /**
      set lang options when page have first load
    */
     setStartLang ({commit, getters, state}, chunkName) {

        import(/* webpackChunkName: "local/lang-[request]" */ `../i18n/${getters.LANG_PORTAL}.js`).then( function(response){
             commit('seti18nGlobals', response  );
         });

     },

    /* initPageLocal({getters}, chunkName){
          return import('core/i18n/'+getters.LANG_PORTAL+'/'+chunkName+'.js');

     },

     getContentForComponent({dispatch, state}, nameComponent) {

          var chunk = nameComponent[0];
          return dispatch('initPageLocal',  chunk).then(function (response) {
              return response[nameComponent];
          })



     }
*/


 },
  getters: {


      /**
        vee-validator
      */
      VEE_MESSAGES(state, getters) {
          if (getters.LANG_PORTAL != 'en') {
              return state.veeValidate;
          } else {
            return false;
          }
      },


      LANGUAGES(){
        return {
          'en':'English',
          'ru':'Русский',
          'uk':'Українська'
        }
      },


      DICTIONARY_KEY:(state)=> (id, sub_chunk) => {

        if (!sub_chunk) {
           sub_chunk = 'global';
        }
        //console.log(sub_chunk);
        if (state[sub_chunk][id]) {
            return state[sub_chunk][id];
        } else {

          if (process.env.NODE_ENV === 'development') {
              return 'id_'+sub_chunk+'_'+id;
          } else {
            return '';
          }

        }

      },


  }
}










export default i18n;
