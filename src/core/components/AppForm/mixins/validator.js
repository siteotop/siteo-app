

var _mapValues = require('lodash/mapValues'); // get some values from objects
var _foIn = require('lodash/forIn'); // get some values from objects  https://lodash.com/docs/4.17.4#forIn
import { Validator } from 'vee-validate';



export default {
      $validator: null,



      methods: {


        atachValidator(element) {

        //  this.$validator.attach(element.name, this.remakeServerValidator(element, element.validate));
          this.$validator.attach(element.name, element.validate);  // deleting server vaidators which writen after ||

           // watch for values
          var self = this;
          this.$watch('pageStructure.' + element.name +'.value', function (value) {
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

        remakeServerValidator(element, validators) {


             // array new front-end validators
             var string_validator = [];


            _foIn(validators, function(value , validator) {



                if (typeof(value) == 'boolean') {
                   string_validator.push(validator);
                } else {
                  switch (validator) {
                   case 'in' :
                      if (typeof(value) != 'string') {
                      //  console.log(element);
                      //  console.log(validators);
                        element.options = value;
                        string_validator.push(validator+':'+value.join(','));
                      }

                      break;
                    default:
                      string_validator.push(validator+':'+value);
                      break;
                  }

                }
            })
           console.log(string_validator);

            return string_validator.join('|');
        },

        /*
        create validator form
        */
        createValidator(){
            this.$validator = new Validator();
            this.errors = null;
            this.$set(this, 'errors', this.$validator.errors);
            this.createVeeMessages(this.$validator);
        },

        createVeeMessages(validator){
            var messages =this.$store.getters.VEE_MESSAGES;
            console.log(typeof (messages));
            console.log(JSON.stringify(messages));
            if (typeof (messages)=='object') {
               const dictionary = {};
               dictionary[messages.name] = messages;
               Validator.localize( dictionary);
               validator.setLocale(messages.name);
            }
        },

        createVeeAttributes(){

            const attr = {attributes:_mapValues(this.pageStructure, 'label')}
            const dictionary = {};
            dictionary[Validator.locale] =  attr;
          //  console.log(dictionary);
            Validator.localize(dictionary);


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
