var _Values = require('lodash/values');   // get values as array and object

import filterMessage from '../utils/filter-message';


const SystemMessages = {
  state: {
     messages: [],
    // validator: [],
     timeout:0
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
        //  conv_mess.push(mess);
        //  this.$options.$timeout+=this.$options.$timeout;
        //  commit('setMessage', mess);
        //  console.log(this.errorMessages);


    },

    /*
        catch error after getStructure request and  sendRequest
        error_response  must be a object and it has two parametrs
        {status : 45, data: {}   }  data is structure from server
     */
    generateSystemMessageRespone( {dispatch, getters, commit},  error){



        if (!error||!error.response||typeof(error.response.data)!='object') {
            console.log(error.response);
            dispatch('generateSystemMessage', {text: 'Error NO CODE: System error. Content is not Object', type: 'error'});
            throw {errorContentNull: true};
          //  return false;
       }



       switch (error.response.status)  {

          case 400:
                if (error.response.data.error_code == 'validatorMessages') {
                    throw  {validatorMessages: true, messages: error.response.data.error_description};
                } else {
                    throw  error.response.data;
                }

                break;

          case 406:
                //dispatch('account/logOut');
                break;
          case 423:
            if (error.response.data.redirect) {
               //this.$router.push({name:error_response.data.name});
               break;
          }
          case 404:
          case 503:
           console.log(error.response);
            if (!error.response.headers) {
               alert('503 or 404')

               return false;
            }
            break;

          default:
            dispatch('generateSystemMessage', {text: error.response.data.error_description, type: 'error'});
          break;
      }

      console.log(error);
      throw error;
  },


  }



}

export default SystemMessages;
