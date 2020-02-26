<template>
 <v-lazy
  v-model="isActive"
 >
  <div v-if="loaded">
    <div v-if="component"><component :is="component" v-on="$listeners" :value="value"  v-bind="pluginOptions"></component></div>
  </div>
  <div v-else>
    <slot v-if="desktopReady">
        <span class="grey--text text--lighten-1">Plugin loading</span>
         <v-progress-linear
              color="primary"
              indeterminate
              rounded
              height="6"
         ></v-progress-linear>
      </slot>
   </div>
 </v-lazy>
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
      },

      /*
        swith to administration mode
      */
      adminMode: {
        type: Boolean,
        default: false
      },

      value: {

      }

    },



    data() {
      return {
        isActive: false,
        desktopReady: false,
        loaded: false,
        component: false
       }
    },

    watch: {
        isActive(newValue, oldValue) {
            if (newValue!=oldValue&&newValue) {
              console.log('Cnahe v-lazy');

              if (!this.pluginName) {
                return
              }
              this.getPluginComponent(this.pluginName);


            }

        }
    },

    mounted() {
        // load plugin
        console.log('Loading Plugin');

        console.log(this);
        // https://some-domen.com/plugins/+this.pluginName
        this.desktopReady = true;
        //console.log(this.pluginName);

    },


    beforeDestroy() {
      if (this.removeOnDestroy) {
          this.removePlugin();
      }
    },

    methods: {

      getPluginComponent(pluginName) {
        var filename = process.env.STATIC_PLUGINS + pluginName+'.js';
        //console.log(this);
        var self = this;

        this.$root.$options.$script(filename).then((data)=>{
            /**
              при створенні плагіна webpack генерує файл який створює змінну в обєкті window['siteo-plugins']
              Тобто якщо плагін завантажено, то існує обєкт window['siteo-plugins'][self.pluginName]
            */
                  var component;
                  if (window['siteo-plugins']&&window['siteo-plugins'][pluginName]) {

                      self.registerSiteoPlugin(window['siteo-plugins'][pluginName]);
                      component= this.getPluginFromStore(pluginName);
                  }
                  self.loaded = true;
                  if (self.adminMode) {
                      self.$emit('change-component', component);
                  } else {
                    self.component = component
                  }

        }).catch((error)=>{
            console.log(error);
            self.loaded =true
        });

      },

      /**
        Plugin was saved in  $root.$options._plugins
      */
      getPluginFromStore(pluginName) {
          var plugin = this.$root.$options._plugins[pluginName];
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
