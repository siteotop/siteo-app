
const filterMessage = function ( message) {
    message.state = true;
    return message;
};

const SystemMessages = {
  state: function () {
      return {
         messages: [],
         timeout:0
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
        commit('setMessage', filterMessage(message));
    }

  }



}

export default SystemMessages;
