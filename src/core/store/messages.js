
const filterMessage = function ( message) {
    message.state = true;
    return message;
};

const SystemMessages = {
  state: function () {
      return {
         messages: [],
         timeout:0,
         status: false
      }
  },

  getters: {
    errorMessages(state) {
        return state.messages.length;
    }
  },

  mutations: {

    turnOnMessages(state) {
       state.status =true;
    },
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

    clearAllMessages(state) {
       state.messages=[];

    }
  },

  actions: {
    /**
        generate message  to system messages
        this action filter message and commit
    */
    generateSystemMessage({commit, state}, message) {
       if (!state.status) {
         return ;
       }
        if (typeof message == 'string') {
          message = {text: message, type: 'error'};
        }
        commit('setMessage', filterMessage(message));
    }

  }



}

export default SystemMessages;
