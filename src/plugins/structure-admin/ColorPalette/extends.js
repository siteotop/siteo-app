
import MixinVModelInput from '../../forms/AppForm/Fields/_mixins/v-model-input';

/**
   https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl
*/
import colors from 'vuetify/es5/util/colors'

export default {

    $colors: colors,
    mixins: [MixinVModelInput],

    props: {
        typeName: {
            type:String,
            default: 'background',
            validator: function (value) {
              // The value must match one of these strings
                return ['background', 'text'].indexOf(value) !== -1
            }
        }
    },

    computed: {
      isText() {
          return this.typeName=='text';
      }
    },

    methods: {
      /**

         create kebab name for color name
         @example lighten5 to lighten-5
      */
      toKebabCase(name) {
          return   name.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
      },

      createValue(nameClass, hex) {
          if (this.isText) {
            return this.createTextValue(nameClass, hex);
          } else {
            return this.createBackgroundValue(nameClass, hex);
          }
      },

      createTextValue(nameClass, hex) {
        var nameClassText = '';
        nameClassText = nameClass[0]+'--text';
        if (nameClass[1]) {
          nameClassText +=' '+'text--'+nameClass[1];
        }

        return {
            name: nameClassText ,
            hex: hex,
            text: ''
        }

      },

      createBackgroundValue(nameClass, hex) {
          var textClass='white--text';
          if (nameClass.length == 2) {
            if (nameClass[1].indexOf('darken')!==0   ) {
                textClass ='dark--text';
            }
            //  nameClass = nameClass.join(' ');
          } else {
            //var textClass=[];
             if (nameClass[0]=='white' || nameClass[0]=='transparent' ) {
                textClass ='dark--text';
             }

             //nameClass = nameClass[0];

          }

          return {
              name:  nameClass.join(' '),
              hex: hex,
              text: textClass
          }
      },


      /**
         emit  newColor valur
         @example  value: {
          name: 'red',
          hex: '#000',
          text: ''
        }
      */
      setNewActiveClass(newColor) {
         this.valueData = newColor;
      },



    }


}
