
const filterMessage = function ( message) {
    message.state = true;
    return message;
};

const SystemMessages = {
  state: function () {
      return {
         messages: [],
         timeout:0,
         pageError: null
      }
  },

  mutations: {


    /*
      set messages which was get from the server
      message is  object  { text: '', type:''}
    */
    setMessage(state, message ){

          const count_mess = state.messages.count;
          if ( count_mess>0) {
              message.timeout =  state.timeout*count_mess;
          } else {
            message.timeout =  state.timeout;
          }

            console.log(message);
          state.messages.push(message)
    },
    setpageError(state, objectError) {
          state.pageError = objectError;
    },
    clearAllMessages(state) {
       state.messages=[];
       state.pageError=null;
    }
  },

  actions: {
    /**
        generate message  to system messages
        this action filter message and commit
    */
    generateSystemMessage({commit, state}, message) {
        if (typeof message == 'string') {
          message = {text: message, type: 'error'};
        }
        commit('setMessage', filterMessage(message));
    }

  }



}

export default SystemMessages;
