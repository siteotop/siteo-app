

import {CreateSubmit} from '../../AppFields/helper/create-fields.js';

//var _template = require('lodash/template');


export default {

    methods: {


      /**
        @param {array} propsStructure -  children element from propsStructure
        @return {array}  - prepared formStructure for using in component
      */
      prepareFormStructure(propsStructure){

          if (!propsStructure.length) {
             return [];
          }
          //var formStructure =
          for (let field_name in propsStructure) {
              var field = propsStructure[field_name].props;

              if (!field.value) {
                this.$set(field, 'value', '');
              }

              if (!field.defaultValue) {
                this.$set(field, 'defaultValue', '');
              }

              //this.$set(field, 'defaultValues', '');
              if (propsStructure[field_name]._name) {
                field.name = propsStructure[field_name]._name;
              }
              if (!field.name) {
                 console.log('Field no have name');
              }
              this.connectCommonProps(field);
              // connect i18n
              this.createFieldI18n(field);

           }
          // console.log(this.formStructure);
           this.createSubmit();


           this.setDefaultValuesFromStore(propsStructure);
           this.createValidation(propsStructure);
           this.disableForm();

           return propsStructure;
           // this.initFormStructure();
      },

      connectCommonProps(field) {
        if (this.typeInput) {
          field[this.typeInput] = true;
        }

      },

      createSubmit() {
         this.buttonSubmit = true;
         this.createFieldI18n(this.submitElement);


      //  var submit = SUBMIT;
      //  this.$set( this.formStructure, 'submit', CreateSubmit()  );
      //

      },

      /**
         @param {Object} field
         connect label (l) and description (d) from i18n chunk
      */
      createFieldI18n(field) {

          this.$set( field, 'label', this.$i18n_t('content.'+field.name+'.l'));
          this.$set( field, 'hint',  this.$i18n_t('content.'+field.name+'.d'));
      },

    }

}
