
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
              var field_props = field_structure.props,
              name = field_structure.name;
              this.createFieldValues(field_structure, name);
              this.connectCommonProps(field_props, name);
              this.createFieldI18n(field_props, name);
              formStructure.push(field_structure);

           }
           this.createRecaptcha(formStructure);
          // console.log(this.formStructure);
           this.createSubmit();

           this.setDefaultValuesFromStore(formStructure);
           this.createValidation(formStructure);
           this.disableForm();

           return formStructure;
           // this.initFormStructure();
      },

      createFieldValues(field_structure) {


        if (!field_structure.value) {
          this.$set(this.dataValues, field_structure.name, '');
        } else {
          this.$set(this.dataValues, field_structure.name, field_structure.value);
        }

        if (!field_structure.defaultValue) {
          this.$set(field_structure, 'defaultValue', '');
        }

      },

      /**
        props for all element
      */
      connectCommonProps(field_props, name) {
        if (this.typeInput) {
          field_props[this.typeInput] = true;
        }
      },

      createRecaptcha(formStructure){
         if (this.recaptcha) {

            var r_structure = {
              name: 'captcha',
              validators: {required: true},
              props: {
                label:this.$t('commonForm.captcha.l'),
                hint: this.$t('commonForm.captcha.d')
              }
            }
            this.createFieldValues(r_structure);
            formStructure.push(r_structure);
         }

      },

      createSubmit() {
         this.$set( this.submitElement, 'label', this.$i18n_td('content.submit.l', 'commonForm.send'));
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
