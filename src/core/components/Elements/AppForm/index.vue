<template>
  <v-card flat fluid @click="enableForm()">
    <slot name="title"><v-subheader>{{$i18n_t('title')}}</v-subheader>
    </slot>
    <AppErrorResponse v-if="errorResponse"
      :errorResponse="errorResponse" :i18nkey="i18nkey" >
    </AppErrorResponse>
    <v-container class='grid-list-sm mt-0 pt-0'>

        <v-layout row wrap align-end>
          <v-flex xs12 v-for="(field, index) in formStructure" :key="index" v-show="!field.hide" :class="field.class?field.class:''" >
              <component :is="field.name"
                  :name="field._n"
                  v-model="dataValues[field._n]"
                  v-bind="field.name[0]=='v'? field.props: Object.assign({vComp: field.props}, field.propsNative)"
              ></component>
          </v-flex>
          <v-flex v-if="recaptcha&&formActive" xs12>
            <AppFieldRecaptcha  v-if="$store.state.APP_INSTANCE.configs.recaptcha"  :token="$store.state.APP_INSTANCE.configs.recaptcha"></AppFieldRecaptcha>
          </v-flex>
       </v-layout>
       <v-layout v-show="!statusLoading&&buttonSubmit"
        row
        wrap
        clas="my-3"
        >
          <v-flex class="xs10 text-xs-left">
            <v-btn :disabled="!formActive" @click="onSubmit">{{submitElement.label}}</v-btn>
          </v-flex>
          <v-flex>
            <v-tooltip top lazy>
              <v-btn slot="activator" icon :disabled="!formActive" @click="leaveform = clearForm">
                <AppIcon name='si-clear'></AppIcon>
              </v-btn>
              <span>{{$t('commonForm.reset')}}</span>
            </v-tooltip>
          </v-flex>
       </v-layout>
       <v-layout v-if="footer" class="pt-2 grey--text">
          <slot name="footer">
          </slot>
       </v-layout>
       <AppConfirm v-if="leaveform"
          :dialog="true"
          :func="leaveform"
          :title="$t('commonForm.leave')"
          :description="$t('commonForm.leave_desc')"
          @hideDialog="()=>{this.leaveform=false}"
       ></AppConfirm>
       <app-pulse-loader v-if="statusLoading" :loading="statusLoading"></app-pulse-loader>
    </v-container>
  </v-card>
</template>

<script>

//var _Values = require('lodash/values');   // get values as array and object

import Loader from '../../_mixins/component-loading.js';
import ChunkLoader from '../../_mixins/loader-i18-chunk.js';

import StoreDefault from './mixins/store.js';
import Validator from './mixins/validator.js';
import FormPrepare from './mixins/prepare.js';

import AppFieldPlainText from './Fields/AppFieldPlainText';
import AppFieldPhone from './Fields/AppFieldPhone';
import AppFieldServices from './Fields/AppFieldServices';
import AppFieldDate from './Fields/AppFieldDate.vue';
import AppFieldRecaptcha from './Fields/AppFieldRecaptcha.vue';

export default {
  //extends: [],

  mixins: [
    Loader, ChunkLoader,  FormPrepare, StoreDefault,  Validator
  ],

  components: {
    AppFieldPlainText,
    AppFieldPhone,
    AppFieldServices,
    AppFieldDate,
    AppFieldRecaptcha
    },

  props: {

      /**
       dispatch link for $sore.dispatch
       All actions for form are  making throught $store.dispatch
      */
      formAction: {
        type: String,
        default: ''
      },

      /**
        collection
        @example #1
          [
            'name_for_MapsSiteoFields',
            {
              name: 'ComponentName', //String or Object
              validators: {'required': true, max:40},
              _n: 'name_for_field',
              props: {'prop_for_ComponentName': 'some_value' }
            },
            {
              role: 'name_for_MapsSiteoFields',
              component: {name: '', validators: {}, _n: '', props:{}}
            }
          ]
      */
      propsStructure: {
          type: Array
        //  default: function () { return {sdfs:true}}
      },

      defaultValues: {
          type:Object

      },

      footer: {
        type: Boolean,
        default: false
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

      },

      recaptcha: {
        type: Boolean,
        default: false
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
        formStructure: [],
        dataValues: {},
        errorResponse: false


      }
  },


  watch: {
    propsStructure(newValue, oldValue) {

      if (newValue.length != oldValue.length ) {
          var self = this;
          console.log(this.errors);

          //console.log(this.$validator.fields);
          this.$validator.fields
          this.formStructure.map(function(element, index) {
            self.$validator.detach(element._n);
            self.$delete(self.formStructure, index);
          });
        this.destroyForm();
        this.formStructure  = this.prepareFormStructure(newValue);
        console.log(this.errors.count());
        this.errors.clear();
        this.clearMessagesForm();
      }

    }
  },

  created() {

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
      this.errorResponse = false;
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

      //const form_data = {};
      //this.formStructure.map((element)=>{ form_data[element._n] = element.value  });

     //  console.log(form_data);
       this.$validator.validateAll(self.dataValues).then(result => {
            if (!result) {
              self.stopFormLoader();
              self.formStructure.map(function(element) {
                  self.validateOneElement(element._n, element.props, self.dataValues[element._n]);
              });

            } else {
              //  console.log(form_data);
                self.sendRequest(self.dataValues);
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
              var suc__mess = self.getSuccessMessage();

              self.stopFormLoader(true);
              self.disableForm();
              self.updateDefaultsValues();

              if (self.successDestroy) {
                 self.$_LocalMessages_add( suc__mess, 'success');
                 self.destroyForm();
              } else {
                self.$store.dispatch('generateSystemMessage', {text: suc__mess, type: 'success'});
              }

              self.$emit('successForm', 1);


        }).catch(error=>{
          console.log(error);
          self.stopFormLoader(true);

          self.errorResponse = error.response.data;
          if (error.response.status ==400&&error.response.data.error_code =='validatorMessages') {
             self.catchFormValidation(error.response.data.error_description);
          }

        });



    },

    catchFormValidation(error_messages) {
        //console.log(message);
        var self = this;
        this.formStructure.map((element)=>{
            let string_message = [];
            if (error_messages[element._n]) {
                var messages = error_messages[element._n].messages;
                for (let keyMessage in  messages ) {
                  var keyError = 'errors.'+element._n+'.'+keyMessage;
                  console.log(keyError);
                  if (self.$i18n_te(keyError)) {
                      string_message.push(self.$i18n_t(keyError));
                    } else {
                      string_message.push(messages[keyMessage]);
                    }
                }
                string_message = string_message.shift();
                self.setErrorForElement(element.props, string_message);
            }

        });



    },

   disableForm(){
          this.formActive = false;
          console.log('form is disabled');
    },
    enableForm(){

       console.log('enable');
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
</script>
