<template>

<v-container  fluid>
<v-row>
  <v-col cols="12" sm="6"  md="3" lg="3" xl="3">
    <v-card>
      <v-toolbar>
         Choise
      </v-toolbar>
    <v-card-text>
      <SiteoPlugin

          pluginName="SiteoPluginSelectItems"

          :pluginOptions="{
            internalApi:citiesLink,
            label: 'Locations',
            vComp: {
              itemValue:'urlId',
              itemText:'title',
              hint:'Choose website',
              rounded: false,
             }
        }"
      >
      </SiteoPlugin>


      <SiteoPlugin
          pluginName="SiteoPluginSelectItems"

          :pluginOptions="{

            label: 'Values',
            vComp: {
              //hint:'Choose website',
              chips: true,
              deletableChips:true,
              rounded: false,
             }
        }"
      >
      </SiteoPlugin>
</v-card-text>
    </v-card>

  </v-col>
  <v-col cols="12" sm="6"  md="4" lg="4" xl="4">
    <v-card>
      <v-toolbar>
         list
      </v-toolbar>

    </v-card>
  </v-col>
  <v-col cols="12" sm="12"  md="4" lg="5" xl="5">
    <v-card>
      <v-toolbar>
         Map
      </v-toolbar>

    </v-card>
  </v-col>

</v-row>
</v-container>


</template>

<script>

import locations from  '../../../store/modules/locations';
import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';


export default {
    mixins: [MetaInfo, ServerFetch],
    nameModule: 'locations',

    data() {
        return {
          pageObject: {}
        }
    },

    computed: {
       citiesLink() {
         var siteoId =this.$store.getters['getSiteoConfig']('mainWebsite');
         return '/apps/'+siteoId+'/locations';
       },

       metaTitle() {

            return 'Need Create';
       },

    },

    methods: {
      getParamsForFetch() {
        let params={};
        return params;
      },

      registerModule(preserveState) {
        this.$store.registerApiModule({
          name: this.$options.nameModule,
          module: locations('appInstance/urlID'),
          moduleOptions: {moduleItems: true},
          preserveState: preserveState
        });
      },
    }


}
</script>
