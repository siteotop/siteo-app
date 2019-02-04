<template>
  <div v-if="loaded">
    <div v-if="isPlugin"><component :is="component"  v-bind="pluginOptions"></component></div>

  </div>
  <div v-else>
      Plugin not  loaded
  </div>
</template>

<script>
export default {

    props: {
      /**
         start name of plugin
         if full name is siteo-plugin-app-form, that put "app-form"
      */
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
        isPlugin: false,
        component: ''
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
        var filename = process.env.STATIC_PLUGINS + this.fullPluginName+'.js';
        //console.log(this);
        var self = this;
        this.$root.$options.$script(filename).then((data)=>{
            if (window['siteo-plugins']&&window['siteo-plugins'][self.pluginName]) {
                var plugin = window['siteo-plugins'][self.pluginName];

                if (plugin.getComponent) {
                    self.component = plugin.getComponent();
                } else {
                  self.$root.$options.SiteoAddPlugin(plugin);
                  self.component = self.fullPluginName;
                }
            }

            self.loaded = true;
            self.isPlugin = true;
        }).catch((error)=>{
            console.log(error);
            self.loaded =true
        });




    }
}



</script>
