

import {CreateSubmit} from '../../AppFields/helper/create-fields.js';

var _template = require('lodash/template');


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
      createFieldI18n(field) {
          this.$set( field, 'label', '');
          this.$set( field, 'description', '');
      },

      setContentToPageStructure(contenti18n) {
        //this.$store.getters.PAGE_CHUNK_KEY( field_name );

        for (let field_name in this.pageStructure ) {
            var i18n = contenti18n[field_name];
            var field  = this.pageStructure[field_name];
            if (i18n) {
              if (i18n.l) {
                    field.label = i18n.l;
                    //this.$set( field, 'label', label);
              }

              if (i18n.template) {
                 let compiled = _template(i18n.template);
                 i18n.d = compiled(field);
              }

              if (i18n.d) {
                  field.description = i18n.d;
                  //  this.$set( field, 'description', i18n.d);
              }

              if (i18n.options) {
                  field.options = i18n.options;
                  //  this.$set( field, 'description', i18n.d);
              }

            }
        }

      }


    }

}
