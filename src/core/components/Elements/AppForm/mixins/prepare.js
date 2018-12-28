
import {getStructureForField, mergeStructureFields} from '../Fields/_helper/MapsSiteoFields';

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
                field_structure = mergeStructureFields(propsStructure[index_component]) ;
              }

              formStructure.push(field_structure);

              var field_props = field_structure.props,
              name = field_structure._n

              if (!field_structure.value) {
                this.$set(this.dataValues, name, '');
              } else {
                this.$set(this.dataValues, name, field_structure.value);
              }

              if (!field_structure.defaultValue) {
                this.$set(field_structure, 'defaultValue', '');
              }

              this.connectCommonProps(field_props, name);
              // connect i18n
              this.createFieldI18n(field_props, name);

           }
          // console.log(this.formStructure);
           this.createSubmit();


           this.setDefaultValuesFromStore(formStructure);
           this.createValidation(formStructure);
           this.disableForm();

           return formStructure;
           // this.initFormStructure();
      },

      connectCommonProps(field_props, name) {
        if (this.typeInput) {
          field_props[this.typeInput] = true;
        }

        //field['prependIcon'] = name

      },

      createSubmit() {
         this.buttonSubmit = true;
         this.createFieldI18n(this.submitElement, 'submit');
      },

      /**
         @param {Object} field
         connect label (l) and description (d) from i18n chunk
      */
      createFieldI18n(field_props, name) {

          this.$set( field_props, 'label', this.$i18n_t('content.'+name+'.l'));
          this.$set( field_props, 'hint',  this.$i18n_t('content.'+name+'.d'));
      },

    }

}
