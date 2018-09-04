

const i18n = {

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


      ,





  }
}










export default i18n;
