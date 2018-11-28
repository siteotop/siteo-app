
import {getStructureForField} from '../Fields/_helper/MapsSiteoFields';

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
          var formStructure = [];
          //var formStructure =
          for (let index_component in propsStructure) {
              var field_structure = {};
              if (typeof(propsStructure[index_component]) == 'string') {
                field_structure = getStructureForField(propsStructure[index_component]);
              } else {
                field_structure = propsStructure[index_component];
              }
              formStructure.push(field_structure);

              var field = field_structure.props,
              name = field_structure._n

              if (!field.value) {
                this.$set(field, 'value', '');
              }

              if (!field.defaultValue) {
                this.$set(field, 'defaultValue', '');
              }
              
              this.connectCommonProps(field, name);
              // connect i18n
              this.createFieldI18n(field, name);

           }
          // console.log(this.formStructure);
           this.createSubmit();


           this.setDefaultValuesFromStore(formStructure);
           this.createValidation(formStructure);
           this.disableForm();

           return formStructure;
           // this.initFormStructure();
      },

      connectCommonProps(field, name) {
        if (this.typeInput) {
          field[this.typeInput] = true;
        }

        field['prependIcon'] =name

      },

      createSubmit() {
         this.buttonSubmit = true;
         this.createFieldI18n(this.submitElement, 'submit');
      },

      /**
         @param {Object} field
         connect label (l) and description (d) from i18n chunk
      */
      createFieldI18n(field, name) {

          this.$set( field, 'label', this.$i18n_t('content.'+name+'.l'));
          this.$set( field, 'hint',  this.$i18n_t('content.'+name+'.d'));
      },

    }

}