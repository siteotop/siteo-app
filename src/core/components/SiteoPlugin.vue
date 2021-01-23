<template>
 <component
  :is="offlazy?'div':'v-lazy'"
  v-model="isActive"

 >
  <div v-if="pluginName&&desktopReady">
    <component :is="pluginName" v-on="$listeners" :value="value"  v-bind="pluginOptions">
    </component>
  </div>

</component>
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
      offlazy: {
        type: Boolean,
        default: false
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


    components: {
      SiteoPluginSelectItems:  ()=> import( /* webpackChunkName: "plugin-items" */ './Plugins/select-items/component.vue'),
      SiteoPluginLastItems:  ()=> import( /* webpackChunkName: "plugin-items" */ './Plugins/last-items/component.vue')
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
              //this.getPluginComponent(this.pluginName);


            }

        }
    },

    mounted() {
        // load plugin
        console.log('Loading Plugin');

        console.log(this);
        // https://some-domen.com/plugins/+this.pluginName
        // desktopReady  needed when v-lazy is turn off
        this.desktopReady = true;
        //console.log(this.pluginName);

    },



}



</script>
