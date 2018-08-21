
const filterMessage = function ( message) {

  //let mess  = {};
  //let mess_array = message.text.split('|');
  //  mess.text  = message.text;
  //  mess.type  = message.type;
  //  mess.link  = mess_array[1];
    message.state = true;
  //  mess.linktext = mess_array[2];
    return message;

};
export default filterMessage;
