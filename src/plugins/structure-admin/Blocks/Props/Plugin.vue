<template>
<div >

 <div v-if="valueData">
  <v-select
       v-model="valueData.pluginName"
       :items="pluginsList"
       label="Plugin name"
     ></v-select>

  <div v-for="(prop, index) in pluginProps">
      <component :is="prop.component"  v-model="prop.value" :label="prop.name" ></component>
  </div>
  {{valueData}}
  <SiteoPlugin
    ref="pluginLoader"
    :adminMode="true"
    @change-component="catchComponent($event)"
  >
  </SiteoPlugin>
 </div>
</div>

</template>

<script>
import MixinVModelInput from '../../../forms/AppForm/Fields/_mixins/v-model-input';
export default {
  mixins:[MixinVModelInput],
  data() {
    return {
       pluginsList: [
         '',
         'SiteoPluginInstagramPost',
         'SiteoPluginSelectItems'
       ],

       pluginComponentProps: {},
       pluginProps: {}
    }
  },

  watch: {
      /*
         Function watchs plaginName and reload plugin
      */
      'valueData.pluginName': function (newValue, oldValue) {
          if (newValue&&newValue!=oldValue) {
              this.$refs.pluginLoader.getPluginComponent(newValue);
          }
       },

       pluginProps: {
         handler:  function(newValue, oldValue) {
            this.valueData.pluginOptions = {};
            for (var key in newValue) {
                var name_prop = newValue[key].name;
              // if prop is default not add to page
               if (this.pluginComponentProps[name_prop] != newValue[key].value) {
                 this.valueData.pluginOptions[name_prop] =  newValue[key].value;
               }

            }
       },
        deep: true
      }
  },

  mounted() {

      if (!this.valueData) {
         this.valueData = {
           pluginName: '',
           pluginOptions: {

           }
         }
      } else {
          // getPluginComponent
          if (this.valueData.pluginName) {
            this.$refs.pluginLoader.getPluginComponent(this.valueData.pluginName);
          }

      }
  },

  methods: {
    catchComponent(newComponent) {
        console.log(newComponent);
        // newComponent.props;
        this.pluginProps = [];
        this.pluginComponentProps = {};



        for (var nameProp in newComponent.props) {
            var type_prop = newComponent.props[nameProp].type;
            console.log(type_prop);
            if (newComponent.props[nameProp].type) {
                // Need if prop is Object
                var NameComponent = false;
                if (type_prop == Boolean) {
                  NameComponent = 'v-switch';
                }

                if (type_prop == String) {
                  NameComponent = 'v-text-field';
                }


                if ( NameComponent) {
                  this.pluginComponentProps[nameProp] = newComponent.props[nameProp].default;
                  this.pluginProps.push({
                      name: nameProp,
                      component: NameComponent,
                      value:this.valueData.pluginOptions[nameProp]||newComponent.props[nameProp].default
                  });
                }
            }
        }
    }

  }



}
</script>
