<template>
  <div v-if="loaded">
    <component :is="fullPluginName" v-if="isPlugin" v-bind="pluginOptions"></component>
  </div>
  <div v-else>
      Plugin loaded
  </div>
</template>

<script>
export default {

    props: {
      pluginName:  {
        type: String,
        default: ''
      },

      pluginOptions: {
        type: Object,
        default: function () {
          return {};
        }
      }

    },

    data() {
      return {
       loaded: false,
       isPlugin: false
       }
    },

    computed: {
      fullPluginName() {
        return  'siteo-plugin-'+this.pluginName;
      }

    },

    mounted() {
        // load plugin
        console.log(this.pluginName);
        // https://some-domen.com/plugins/+this.pluginName
        var filename = 'http://jstest.com/dist/'+this.fullPluginName+'.js';
        //console.log(this);
        var self = this;
        this.$root.$options.$script(filename).then((data)=>{

            //console.log('loaded plugin ');
            if (window[self.fullPluginName]) {
              self.isPlugin = true;
            }
            console.log(data);
            self.$root.$options.SiteoAddPlugin(window[self.fullPluginName]);
            //console.log(window[self.fullPluginName]);
            self.loaded = true;
        }).catch((error)=>{
            console.log(error);
            self.loaded =false
        });




    },

    beforeDestroy() {

        // unregister plugin and  delete all objects
        console.log(this.fullPluginName);
        //delete window['siteo-plugin-designer'];
        // unload plugin
    }


}



</script>
