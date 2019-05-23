<template>
  <div v-if="loaded">
    <div v-if="component"><component :is="component"  v-bind="pluginOptions"></component></div>

  </div>
  <div v-else>
      Plugin not  loaded
      <v-progress-linear
            color="primary"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
  </div>
</template>

<script>
export default {

    props: {
      /**
        plugin name like siteo-plugin-forms, siteo-plugin-instagram-posts

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
      },

      removeOnDestroy: {
        type: Boolean,
        default: false
      }

    },



    data() {
      return {
        loaded: false,
        component: false
       }
    },


    mounted() {
        // load plugin
        console.log('Load Plugin');
        console.log(this.pluginName);
        // https://some-domen.com/plugins/+this.pluginName


        var filename = process.env.STATIC_PLUGINS + this.pluginName+'.js';
        //console.log(this);
        var self = this;

        this.$root.$options.$script(filename).then((data)=>{
            console.log(data);
            if (window['siteo-plugins']&&window['siteo-plugins'][self.pluginName]) {
                self.registerSiteoPlugin(window['siteo-plugins'][self.pluginName]);
                self.component = this.getPluginFromStore(self.pluginName);
            }
            self.loaded = true;

        }).catch((error)=>{
            console.log(error);
            self.loaded =true
        });




    },
    beforeDestroy() {
      if (this.removeOnDestroy) {
          this.removePlugin();
      }
    },

    methods: {
      getPluginFromStore() {
          var plugin = this.$root.$options._plugins[this.pluginName];
          if (plugin) {
              if (plugin.component) {
                return plugin.component;
              }

          }
          return false;

      },

      removePlugin() {

          if ( this.$root.$options._plugins[this.pluginName]) {
             delete this.$root.$options._plugins[this.pluginName];
          }

      }
    }
}



</script>
