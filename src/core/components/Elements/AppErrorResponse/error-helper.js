
/**

*/
 export const helperValidationError = function(error_messages, nameErrorField, self ) {
  var validation_errors = [];
  var messages = error_messages[nameErrorField].messages;
  for (let keyMessage in  messages ) {
    var keyError = 'errors.'+nameErrorField+'.'+keyMessage;
    console.log(keyError);
    if (self.$i18n_te(keyError)) {
        validation_errors.push(self.$i18n_t(keyError));
      } else {
        validation_errors.push(messages[keyMessage]);
      }
  }
  return  validation_errors;
}
