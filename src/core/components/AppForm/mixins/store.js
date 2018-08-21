
var _Values = require('lodash/values');   // get values as array and object
//import moment from 'moment';
var _Clone = require('lodash/clone');



export default {

  methods: {

    /**
      does not use
    */
    clearForm(){


        _Values(this.pageStructure).map(function(element) {
             //console.log('nulled form for' + element.name );
             console.log(element.defaultValue);

             element.value = element.defaultValue;
             //element.state = false;
         });
        console.log(this.pageStructure);
        this.clearMessagesForm();
        this.disableForm();


    },



    setDefaultValuesFromStore() {
       if (!this.defaultValues) {
           return false;
        }

        // console.log(this.defaultValues);
      //  var defaultValues = _Clone(this.defaultValues);
        var self = this;
       _Values(this.pageStructure).map(function(element) {

            if (self.defaultValues[element.name]&&  !element.skipStartValue ){
               self.setNewValueForElement( self.defaultValues[element.name], element);
            }
        });
     },

     setNewValueForElement(newValue, element) {


       element.value =  newValue;   //this.filter(element, newValue);
       element.defaultValue = element.value;

     },


    filterValuesBeforeSave(data){

      var data_clone = _Clone(data);
      var self = this;
      _Values(this.pageStructure).map(function(element) {
            var  value;
           if (element.unFilteredFunc) {
               value = element.unFilteredFunc(element.value, element);

           } else {
              value = element.value;
           }
           //data_clone[element.name] = value;
           data_clone[element.name] = value;

           // if present defaultValues it means that change (put) event
           if ( self.defaultValues && element.defaultValue == value) {
              delete data_clone[element.name];
           }

       });

       return data_clone;

    },

    updateDefaultsValues() {

        _Values(this.pageStructure).map(function(element) {
              element.defaultValue = element.value;

         });


     }






  }


}
