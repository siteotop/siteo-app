

import {CreateSubmit} from '../../AppFields/helper/create-fields.js';

//var _template = require('lodash/template');


export default {

    methods: {

      preparePageStructure(){

          if (!this.pageStructure) {
            return false;
          }

          for (let field_name in this.pageStructure ) {
              var field = this.pageStructure[field_name];
              field.name =  field_name;
              if ( field.i18n) {
                  this.createFieldI18n(field, field_name);
              }
           }
          // console.log(this.pageStructure);
           this.createSubmit();

           this.initPageStructure();
      },


      createSubmit() {
      //  var submit = SUBMIT;
        this.$set( this.pageStructure, 'submit', CreateSubmit()  );
        this.createFieldI18n(this.pageStructure.submit, 'submit');

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
