

import {CreateSubmit} from '../../AppFields/helper/create-fields.js';

//var _template = require('lodash/template');


export default {

    methods: {

      prepareFormStructure(){

          if (!this.formStructure) {
            return false;
          }

          for (let field_name in this.formStructure ) {
              var field = this.formStructure[field_name];
              field.name =  field_name;
              if ( field.i18n) {
                  this.createFieldI18n(field, field_name);
              }
           }
          // console.log(this.formStructure);
           this.createSubmit();

           this.initFormStructure();
      },


      createSubmit() {
      //  var submit = SUBMIT;
        this.$set( this.formStructure, 'submit', CreateSubmit()  );
        this.createFieldI18n(this.formStructure.submit, 'submit');

      },

      /*
        get label (l) and description (d) from i18n chunk
      */
      createFieldI18n(field, field_name) {

          this.$set( field, 'label', this.$i18n_t('content.'+field_name+'.l'));
          this.$set( field, 'description', this.$i18n_t('content.'+field_name+'.d'));
      },

    }

}
