
export default {
      //$validator: null,
      $_veeValidate: {
          validator: 'new'
      },


      methods: {
        /**
          Create Validations for every element of formStructure
          @param {Object} formStructure
         */
        createValidation(formStructure) {
          var self = this;
          const attrs = {};
          //console.log(self.$validator);
          formStructure.map(function(element, index) {
              self.$validator.attach(element._n, element.validators )
              self.atachValidator(element._n, element.props, index);
              // create attribs attr for method createAttrDictionary()
              attrs[element._n] = element.props.label;
          });

          this.createAttrDictionary(attrs);
        },


        /**
          createAttrDictionary for creating  attrs for messaging in vee-validate
          @param {Object} attrs  - objects of atts
          @example attrs = { name: 'Your Name', lastname: 'Your Lastname' }
        */
        createAttrDictionary(attrs){
          const dictionary = {};
          dictionary[this.$validator.locale] = {attributes:  attrs } ;
          this.$validator.localize(dictionary);
        },


        /**
          Atach Validator for every field and connect to messaging
          @param {Object} fieldProps - formStructure.element.props
          @param {Number} index  - index of element
        */
        atachValidator(fieldName, fieldProps, index) {
          //create param error for fieldProps

          fieldProps.error = null;
          var self = this;
          //var key = ;
          this.$watch( 'formStructure.' +index+'.props.value', function (value) {

                if (fieldProps.defaultValue!=value) {
                    if (self.fields[fieldName]) {
                      self.validateOneElement(fieldName, fieldProps, value);
                    }
                   // enable form if we start change fields

                } else {

                   self.nulledState(fieldProps);
                }

            })
        },


        /**
          Make null state for element which has  validation true (validate OK)
          @param {Object} fieldProps - formStructure.field.props
        */
        nulledState(fieldProps) {
          fieldProps.error =null;
          fieldProps.errorMessages = [];
        },


        /**
          validate one element
          @param {Object} fieldProps - element is  formStructure.element.props
        */
        validateOneElement(fieldName, fieldProps, value){
          const self = this;
          console.log(this.errors);
          this.$validator.validate(fieldName,  value).then(function(result) {
             if (!result) {
                // validation NO
                self.setErrorForElement(fieldProps,  self.errors.first(fieldName))
              } else {
                 // validation OK
                 self.nulledState(fieldProps);
              }

          }).catch(function(){

            // something went wrong (non-validation related).
          })



        },


        /**
           add error about validation one element
           @param {Object} fieldProps - formStructure.element.props
        */
        setErrorForElement(fieldProps, message){
           fieldProps.error = true;
           fieldProps.errorMessages =[ message];
        },


      }



}
