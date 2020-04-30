<template>
 <v-lazy
  v-model="isActive"

 >
  <div v-if="pluginName"><component :is="pluginName" v-on="$listeners" :value="value"  v-bind="pluginOptions"></component></div>

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
              //this.getPluginComponent(this.pluginName);


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



}



</script>
