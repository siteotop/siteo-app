
var _Values = require('lodash/values');   // get values as array and object





import Loader from '../../_mixins/component-loading.js';
import ChunkLoader from '../../_mixins/loader-i18-chunk.js';

import StoreDefault from './mixins/store.js';
import Validator from './mixins/validator.js';
import FormPrepare from './mixins/prepare.js';
import FormRender from './mixins/render.js';





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
          type: Array
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
      },

      typeInput: {
        type: String,
        default: '', // solo, box, outline

      }



  },




  data () {
    return {
        buttonSubmit: false,
        submitElement: {
           name:'submit',
           label: 'Submit',
           hint: ''
        },
        formActive: false,
        leaveform: false,

        //i18n: {},
        formStructure: [],
        //valueStructure: {names:''}

      }
  },



  created() {

    //console.log(this.propsStructure);
    //if (this.propsStructure) {
    //   this.formStructure = this.propsStructure;
    //}
    this.formStructure  = this.prepareFormStructure(this.propsStructure);
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
             var translation_key = 'success.'+type,
              successText = '';
             if (this.$i18n_te(translation_key)) {
                 successText = this.$i18n_t(translation_key) ;
             } else {
                  successText = this.$t('commonForm.success');
             }
             return successText;

           },


          /**
            prepare page Structure if was not server request
          */
          destroyForm(){
            this.disableForm();
            this.formStructure = [];
            this.buttonSubmit = false;
          },

          /**
            Clear all messages from elements of formStructure
          */
          clearMessagesForm(){
            this.$store.commit('clearAllMessages');
            this.$_LocalMessages_clear();
            this.formStructure.map((element)=>{
              this.nulledState(element.props)
            });
          },


          /*
            event when we press button
          */
          onSubmit(evt) {
            evt.preventDefault();
            this.startFormLoader();
            const self = this;

            const form_data = {};
            this.formStructure.map((element)=>{ form_data[element.props.name] = element.props.value  });

            console.log(form_data);
             this.$validator.validateAll(form_data).then(result => {
                  if (!result) {
                    self.stopFormLoader();
                    this.formStructure.map(function(element) {
                        self.validateOneElement(element.props, element.props.value);
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
            //console.log(this.formStructure.captcha);
            if (this.formStructure.captcha!==undefined) {
                this.formStructure.captcha.reload ++;
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

                    let string_message = [];
                    for (let keyMessage in  message.messages ) {

                    var keyError = message.field+keyMessage;
                    if (self.$i18n_te('errors.'+keyError)) {
                        string_message.push(self.$i18n_t('errors.'+keyError));
                      } else {
                        string_message.push(message.messages[keyMessage]);
                      }

                    }
                    string_message = string_message.shift();
                    self.$_LocalMessages_add( string_message, 'error');


                    if (self.formStructure&&self.formStructure[message.field]!==undefined) {
                        //label = self.formStructure[message.field].label+'": ';

                        self.setErrorForElement(self.formStructure[message.field], string_message);
                    }

               });
             } else {

               self.addLocalMessageFromResponse(error, 'error' );

             }
          },

          addLocalMessageFromResponse(error, type ) {

            var keyError = error.error_code;
            var message  = error.error_description;

            var translation_key = this.i18nkey+'.errors.'+keyError;
            if (this.$te(ktranslation_key)) {
               message = this.$t(translation_key);
            }
            this.$_LocalMessages_add( message,  type );
          },


          disableForm(){
                this.formActive = false;
                console.log('form is disabled');
          },
          enableForm(){
            //  console.log(this.formStructure);
              if (!this.formActive&& Object.keys(this.formStructure).length >0)  {
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
