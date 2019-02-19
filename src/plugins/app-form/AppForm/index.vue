<template>
  <v-card flat fluid  @keyup.ctrl.enter="onSubmit">
    <slot name="title"><v-subheader>{{$i18n_t('title')}}</v-subheader>
    </slot>
    <AppErrorResponse v-if="errorResponse"
      :errorResponse="errorResponse" :i18nkey="i18nkey" >
    </AppErrorResponse>
    <div v-if="successResult">
        <v-alert type="success" v-model="successResult">
          {{getSuccessMessage()}}
        </v-alert>
      <slot name="success">
      </slot>
    </div>
    <v-container v-if="showForm" class='grid-list-sm mt-0 pt-0'>
      <v-layout row wrap align-end>
          <v-flex xs12 v-for="(field, index) in formStructure" :key="index" v-show="!field.hide" :class="field.class?field.class:''" >
              <component v-if="field.name!='captcha'" :is="field.component"
                  :name="field.name"
                  v-model="dataValues[field.name]"

                  v-bind="field.component[0]=='v'? field.props: Object.assign({vComp: field.props}, field.propsNative)"
              ></component>
              <AppFieldRecaptcha v-if="(field.name=='captcha'&&formActive)"
                  v-model="dataValues[field.name]"
                  v-bind="field.props"
              ></AppFieldRecaptcha>
          </v-flex>
         </v-layout>
       <v-layout v-show="!statusLoading"
        row
        wrap
        clas="my-3"
        >
          <v-flex class="xs10 text-xs-left">
            <v-btn :disabled="!formActive" @click="onSubmit">{{submitElement.label}}</v-btn>
          </v-flex>
          <v-flex>
            <v-tooltip top lazy>
              <v-btn slot="activator" icon :disabled="!formActive" @click="leaveform = resetForm">
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

import Loader from '../../../core/components/_mixins/component-loading.js';
import ChunkLoader from '../../../core/components/_mixins/loader-i18-chunk.js';
import {helperValidationError} from '../../../core/components/Elements/AppErrorResponse/error-helper.js';

import StoreDefault from './mixins/store.js';
import Validator from './mixins/validator.js';
import FormPrepare from './mixins/prepare.js';

import AppFieldPlainText from './Fields/AppFieldPlainText';
import AppFieldPhone from './Fields/AppFieldPhone';
import AppFieldItems from './Fields/AppFieldItems.vue';
import AppFieldDate from './Fields/AppFieldDate.vue';
import AppFieldWorldApi from './Fields/AppFieldWorldApi.vue';
import AppFieldRecaptcha from './Fields/AppFieldRecaptcha.vue';

const startFormData = function () {
  return {
      showForm: true,
      submitElement: {
         name:'submit',
         label: 'Submit',
         hint: ''
      },
      successResult: false,
      formActive: false,
      leaveform: false,
      formStructure: [],
      dataValues: {},
      errorResponse: false

    }
}

export default {
  //extends: [],

  mixins: [
    Loader, ChunkLoader,  FormPrepare, StoreDefault,  Validator
  ],

  components: {
    AppFieldPlainText,
    AppFieldPhone,
    AppFieldItems,
    AppFieldDate,
    AppFieldWorldApi,
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
              component: 'ComponentName', //String or Object
              validators: {'required': true, max:40},
              name: 'name_for_field',
              props: {'prop_for_ComponentName': 'some_value' }
            },

            {
              role: 'name_for_MapsSiteoFields',
              component: {name: '', validators: {}, name: '', props:{}}
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

  data: startFormData,


  watch: {
    propsStructure(newValue, oldValue) {
      if (newValue.length != oldValue.length ) {
          var self = this;
          this.resetForm();
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

    resetForm() {
      console.log(this);
      this.detachValidator();
      var start_data = startFormData();
        for (var i in start_data) {
          this[i] = start_data[i];
        }

      this.formStructure  = this.prepareFormStructure(this.propsStructure);
      this.clearMessagesForm();
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
      //this.formStructure = [];
      this.showForm = false
    },

    /**
      Clear all messages from elements of formStructure
    */
    clearMessagesForm(){
      this.$store.commit('clearAllMessages');
      this.errorResponse = false;
      this.successResult = false;

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

      this.$validator.validateAll(self.dataValues).then(result => {
            if (!result) {
              console.log('error validation');
              self.stopFormLoader();
              self.formStructure.map(function(element) {
                  self.validateOneElement(element.name, element.props, self.dataValues[element.name]);
              });

            } else {
                console.log('validation ok');
                //console.log(self.dataValues);
                self.sendRequest(self.dataValues);
            }

            // success stuff.
          }).catch((error) => {
            //
            console.log(error);
            self.stopFormLoader();

            // something went wrong (non-validation related).
          });
    },

    /**
      reset Google Captcha
    */
    clearCaptcha() {
      //console.log(this.formStructure.captcha);
      if (this.dataValues.captcha!==undefined) {
          this.dataValues.captcha ='';
      }

    },


    /**
      send and check validation
    */
    sendRequest(data) {
       var self = this;
       if (!this.formAction) {
             self.$store.dispatch('generateSystemMessage', {text: 'No Action', type: 'error'});
             self.stopFormLoader();
             return false;
       }

       self.startFormLoader();
       self.clearMessagesForm();
       //console.log('sfd');
      data = self.filterValuesBeforeSave(data);

        //var dispatch = this.$options.$storeForValues + '/' + this.$options.$method;
        //var apidata = {data: data}
     return self.$store.dispatch(this.formAction, data).then(response=>{
              //var suc__mess = self.getSuccessMessage();

              self.stopFormLoader();
              self.disableForm();
              self.clearCaptcha();
              self.updateDefaultsValues();

              if (self.successDestroy) {
                 self.destroyForm();
              }
              this.successResult = true;
              self.$emit('successForm', response);


        }).catch(error=>{
          console.log(error);
          //self.disableForm();
          self.clearCaptcha();
          self.stopFormLoader();

          self.errorResponse = error.response.data;
          if (error.response.status ==400&&error.response.data.error_code =='validatorMessages') {
             self.catchFormValidation(error.response.data.error_description);
          }

        });



    },

    /**
     @param error_messages is error.response.data.error_description

    */
    catchFormValidation(error_messages) {
        //console.log(message);
      var self = this;
      this.formStructure.map((element)=>{
        if (error_messages[element.name]) {
          var string_message = helperValidationError(error_messages, element.name, self ).shift();
          self.setErrorForElement(element.props, string_message);
        }

      });
    },

    disableForm(){
        this.formActive = false;
        console.log('form is disabled');
    },

    enableForm(){
        if (!this.formActive)  {
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
    stopFormLoader() {
        this.stopLoading();
    },






  },


};
</script>
