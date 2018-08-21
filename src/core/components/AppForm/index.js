
var _Values = require('lodash/values');   // get values as array and object
var _mapValues = require('lodash/mapValues'); // get some values from objects



import Loader from '../mixins/component-loading.js';
import StoreDefault from './mixins/store.js';
import Validator from './mixins/validator.js';
import FormPrepare from './mixins/prepare.js';
import FormRender from './mixins/render.js';

import ChunkLoader from '../mixins/loader-i18-chunk.js';



export default {
  //extends: [],
  mixins: [
       FormRender, Loader, ChunkLoader,  FormPrepare, StoreDefault,  Validator
  ],


  props: {

      formAction: {
        type: String,
        default: ''
      },

      propsStructure: {
          type: Object
        //  default: function () { return {sdfs:true}}
      },

      defaultValues: {
          type:Object

      },


      successDestroy: {
          type: Boolean,
          default: false
      },



      activateForm: {
        type: Boolean,
        default: false
      }

  },




  data () {
    return {
        buttonSubmit: false,
        formActive: false,
        leaveform: false,

        //i18n: {},
        pageStructure: false,

      }
  },



  created() {

    //console.log(this.propsStructure);
    if (this.propsStructure) {
       this.pageStructure = this.propsStructure;
    }
    //console.log(JSON.stringify(this.$props));

  //  console.log(JSON.stringify(this.fieldsI18n));

    this.preparePageStructure();
    if (this.activateForm) {
      this.enableForm();
    }


  },





  beforeRouteLeave(to, from, next) {

      if (this.formActive) {
          //console.log(this.formActive);
          this.leaveform = next;
      } else {
        next();
      }


  },



  methods: {



           successFormRequest(response){

               //this.destroyForm();
              // this.setMessageSuccessAfterRequest();

           },

           getSuccessMessage(type){

             if (!type) {
               type = 'submit';
             }
             var successText = this.$_ContentI18N_get('success', type, 'form_success'); // this.contentI18N.success[type];
             /*if (!successText) {
                 successText = this.$store.getters.DICTIONARY_KEY('form_success');
             }*/

             return successText;

           },


          /**
            prepare page Structure if was not server request
          */



          /**
            generate validate
          */
          initPageStructure(){

              this.createValidator();

              this.buttonSubmit = true;

              var self = this;

              this.setDefaultValuesFromStore();
              _Values(this.pageStructure).map(function(element) {
                  //element.state = null;

                  // attach validators to the elements
                    self.atachValidator(element);


              });




              this.createVeeAttributes();
              self.disableForm();

          },


          destroyForm(){
            this.disableForm();
            this.pageStructure = {};
            //this.$delete('pageStructure');

            this.buttonSubmit = false;

          },


          clearMessagesForm(){

              this.$store.commit('clearAllMessages');
              this.$_LocalMessages_clear();
              _Values(this.pageStructure).map(function(element) {
                    element.state = false;
                    element.feedback = [];
              });

            },


          /*
            event when we press button
          */
          onSubmit(evt) {
            evt.preventDefault();
            this.startFormLoader();
            const self = this;

            const form_data = _mapValues(this.pageStructure, 'value');
            //  console.log(form_data);
             this.$validator.validateAll(form_data).then(result => {
                  if (!result) {
                      self.stopFormLoader();
                        _Values(this.pageStructure).map(function(element) {
                            self.validateOneElement(element, element.value);

                        });

                  } else {
                    //  console.log(form_data);
                      self.sendRequest(form_data);
                  }

                  // success stuff.
                }).catch(() => {
                  self.stopFormLoader();
                   //console.log('fucking shert');
                  // something went wrong (non-validation related).
                });
          },

          /**
            reset Google Captcha
          */
          clearCaptcha() {
            //console.log(this.pageStructure.captcha);
            if (this.pageStructure.captcha!==undefined) {
                this.pageStructure.captcha.reload ++;
            }

          },


          /**
            send and check validation
          */
          sendRequest(data) {
             var self = this;
             if (!this.formAction) {
                   self.$store.dispatch('generateSystemMessage', {text: 'No Action', type: 'error'});
                   self.stopFormLoader(true);
                   return false;
             }

             self.startFormLoader();
             self.clearMessagesForm();
             //console.log('sfd');
            data = self.filterValuesBeforeSave(data);

              //var dispatch = this.$options.$storeForValues + '/' + this.$options.$method;
              //var apidata = {data: data}
           return self.$store.dispatch(this.formAction, data).then(response=>{
                    var sec__mess = self.getSuccessMessage();
                  //  console.log(response);
                  //  self.$store.dispatch('generateSystemMessage', {text: sec__mess, type: 'success'});
                    self.stopFormLoader(true);
                    self.disableForm();
                    self.updateDefaultsValues();
                    self.successFormRequest(response);
                    if (self.successDestroy) {
                       self.$_LocalMessages_add( sec__mess, 'success');
                       self.destroyForm();
                    } else {
                      self.$store.dispatch('generateSystemMessage', {text: sec__mess, type: 'success'});
                    }

                    self.$emit('successForm', sec__mess);


              }).catch(error=>{
                    console.log(error);
                    self.stopFormLoader(true);
                    self.catchFormValidation(error);

                    // commit('setMessages', messages);



              });



          },

          catchFormValidation(error) {
              //console.log(message);
              var self = this;
              if (error.validatorMessages) {

              _Values( error.messages).map(function (message, key){

                    console.log(message);
                    let string_message = [];

                    for (let keyMessage in  message.messages ) {

                      var keyError = message.field+keyMessage;
                      console.log(keyError);
                      if (self.contentI18N.errors[keyError]) {
                        string_message.push(self.contentI18N.errors[keyError]);
                      } else {
                        string_message.push(message.messages[keyMessage]);
                      }

                    }

                    string_message = string_message.shift(); // join('; ');
                    //messages.push( );
                    //self.catchFormValidation(message.field, string_message);
                    //var label = '';
                    self.$_LocalMessages_add( string_message, 'error');


                    if (self.pageStructure&&self.pageStructure[message.field]!==undefined) {
                        //label = self.pageStructure[message.field].label+'": ';

                        self.setErrorForElement(self.pageStructure[message.field], string_message);
                    }

               });
             } else {

               self.addLocalMessageFromResponse(error, 'error' );

             }
          },

          addLocalMessageFromResponse(error, type ) {

            var keyError = error.error_code;
            var message  = error.error_description;

            var translate = this.$_ContentI18N_get('errors', keyError, false);
            if (translate) {
               message = translate;
            }



            this.$_LocalMessages_add( message,  type );
          },


          disableForm(){
                this.formActive = false;

                console.log('form is disabled');
          },
          enableForm(){
            //  console.log(this.pageStructure);
              if ( Object.keys(this.pageStructure).length >0)  {
                  console.log('form is enabled');
                this.formActive = true;
              }
          },


          /**
            start loader before send request
          */
          startFormLoader() {
             this.startLoading();
             this.clearMessagesForm();
          },


          /**
            stop loader before send request
          */
          stopFormLoader(captcha) {

              this.stopLoading();

              if (captcha) {
                this.clearCaptcha();
              }

          },






  },


};
