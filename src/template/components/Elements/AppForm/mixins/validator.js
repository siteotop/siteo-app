
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

          formStructure.map(function(element, index) {
              self.atachValidator(element.props, index);
              // create attribs attr for method createAttrDictionary()
              attrs[element.props.name] = element.props.label;
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
        atachValidator(fieldProps, index) {
          //create param error for fieldProps
          fieldProps.error = null;
          var self = this;
          this.$watch('formStructure.' +index+'.props.value', function (value) {

                if (fieldProps.defaultValue!=value) {
                    if (self.fields[fieldProps.name]) {
                      self.validateOneElement(fieldProps, value);
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
        validateOneElement(fieldProps, value){
          const self = this;
          if (this.errors.has(fieldProps.name)) {
           this.setErrorForElement(fieldProps,  this.errors.first(fieldProps.name))
          } else {
            this.nulledState(fieldProps);
          }


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
