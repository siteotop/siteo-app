

import { Validator } from 'vee-validate';

export default {
      //$validator: null,


      methods: {
        /**
          Create Validations for every element of formStructure
          @param {Object} formStructure
         */
        createValidation(formStructure) {
          var self = this;
          const attrs = {};

          self.$validator = new Validator();

          console.log(self.$validator);
          formStructure.map(function(element, index) {

              // documentation:https://baianat.github.io/vee-validate/api/field.html#api
              self.$validator.attach( {name: element.name, rules: element.validators } )
              self.atachValidator(element.name, element, index);
              // create attribs attr for method createAttrDictionary()
              attrs[element.name] = element.props.label;
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
        atachValidator(fieldName, element, index) {

          //create param error for fieldProps
          var fieldProps = element.props;
          fieldProps.error = null;
          var self = this;
          //var key = ;
          this.$watch( 'dataValues.'+element.name, function (value) {
              this.enableForm();

            if (element.defaultValue!=value) {
                console.log(fieldName + ' = '+value  );

                  self.validateOneElement(fieldName, fieldProps, value, element.validators);

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
        validateOneElement(fieldName, fieldProps, value, validators){
          var self = this;
          //console.log(this.errors);
          self.$validator.verify(value,  validators, {name: fieldName}).then(function(result) {

            if (!result.valid) {
                // validation NO
                self.setErrorForElement(fieldProps, result.errors)
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
          console.log(message);
           //fieldProps.label=message;

           fieldProps.error = true;
           fieldProps.errorMessages =message;
          // fieldProps.errorMessages.push(message);
        },


      }



}
