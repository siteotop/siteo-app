
//import moment from 'moment';
var _Clone = require('lodash/clone');



export default {

  methods: {

    setDataValue(name, value) {
      this.dataValues[name] = value;
    },

    /**
      Set default values to every element from formStructure
      @param {Array} formStructure
    */
    setDefaultValuesFromStore(formStructure) {
       if (!this.defaultValues) {
           return false;
        }

        var self = this;
        formStructure.map(function(element) {
            //var field = element.props;
            if (self.defaultValues[element.name]&&  !element.skipStartValue ){
               self.setNewValueForElement( self.defaultValues[element.name], element);
            }
        });
     },

     setNewValueForElement(newValue, element) {

      this.setDataValue(element.name, newValue);
      // element.value =  newValue;   //this.filter(element, newValue);
      element.defaultValue = newValue;

     },


    filterValuesBeforeSave(data){

      var data_clone = _Clone(data);
      var self = this;
      this.formStructure.map(function(element) {
          var  value;
           if (element.unFilteredFunc) {
               value = element.unFilteredFunc(element.value, element);

           } else {
              value = self.dataValues[element.name];
           }
           data_clone[element.name] = value;

           // if present defaultValues it means that change (put) event
           if ( self.defaultValues && self.defaultValues[element.name] == value) {
              delete data_clone[element.name];
           }

       });

       return data_clone;

    },

    updateDefaultsValues() {

        this.formStructure.map((element)=>{
              element.defaultValue = this.dataValues[element.name];

         });


     }






  }


}
