var _mapValues = require('lodash/mapValues'); // get some values from objects

export default {
      //$validator: null,
      $_veeValidate: {
          validator: 'new'
      },


      methods: {


        atachValidator(element) {

           this.$validator.attach(element.name, element.validate);  // deleting server vaidators which writen after ||

           // watch for values
          var self = this;
          this.$watch('formStructure.' + element.name +'.value', function (value) {
              //  console.log(element.name);
                //console.log(element.value);
                if (element.defaultValue!=value) {
                    if (element.validate) {
                      self.validateOneElement(element, value);
                    }
                //    console.log('form is enabled in validator');
                  //  console.log(element);
                   self.enableForm();
                } else {
                   self.nulledState(element);
                }
                //  console.log(element);

            })
        },


        /*
          cretae attributes for form

        */
        createVeeAttributes(){

            const attr = {attributes:_mapValues(this.formStructure, 'label')}
            const dictionary = {};
            dictionary[this.$validator.locale] =  attr;
            //  console.log(dictionary);
            console.log(dictionary);
            this.$validator.localize(dictionary);


        },

        nulledState(element) {

          element.state =null;
          element.feedback = [];
        },
        /**
          validate one element
        */
        validateOneElement(element, value){
          const self = this;

          // trim element if  it need


          self.$validator.validate(element.name, value).then(function(result) {


                //self.validateOneElement(result, element );
              //  console.log(element.name);
                if (result) {
                   self.nulledState(element);
                } else {
                   var errorBag = self.$validator.errors;
                   self.setErrorForElement(element,  errorBag.first(element.name));

                }

          })

        },


          /*
             add error about validation one element
          */
          setErrorForElement(element, message){

             element.state = true;
             element.feedback =[ message];



          },


      }



}
