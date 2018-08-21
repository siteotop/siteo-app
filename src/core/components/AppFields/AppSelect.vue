<script>

import AbstractInput from './mixins/input.js';

export default {

  mixins: [AbstractInput],


  data() {
        return {
            options:[],
            itemtext: 'text',
            itemvalue: 'value'
        }

    },


  created() {

    console.log(this.el);

    if ( this.el.type_select == 'options' ) {
        this.getTypeOptions();
    }

    if ( this.el.type_select == 'resource' ) {
        this.getTypeResource();
    }


  },

  watch: {

      'el.options': function (value) {
         if (value) {
           this.getTypeOptions();
         }

      }

  },

  computed: {



      optionsi18n() {

          return this.options;
      }

  },


  methods: {
      getTypeOptions(){
          var options = [];
          console.log(JSON.stringify( this.el));

          for (let value in this.el.options) {
              options.push({value:value , text:this.el.options[value] });
          }
          this.options =  options;


      },

      remakeOptions(options, i18n) {

      },

      /*


      getTypeResource() {
            var self = this;

          import('src/i18n/'+this.$store.getters.LANG_PORTAL+'/'+this.el.resource_name+'.js').then( function(response){
                 let param =  response.selectMap;
                 self.itemtext = param.itemtext;
                 self.itemvalue = param.itemvalue;
                 self.options = response.countries;


               //context.commit('seti18nGlobals', response.default  );
          }) ;


      }
     */

  },



  render(h) {
    var el = this.el;

    return  <v-select
              items={this.optionsi18n}
              required = {el.required}
              disabled = {el.disabled}
              //v-model="e1"
              label={el.label}
              loading={!this.optionsi18n.length? 'primary': false}
              prepend-icon={el.prepend_icon}
              bottom
              item-text= {this.itemtext}
              item-value= {this.itemvalue}
              error={el.state}
              error-messages = {el.feedback}
              value={el.value}
              autocomplete = {el.autocomplete}
              on-input={(value)=>el.value = value}
            ></v-select>

  }

}



</script>
