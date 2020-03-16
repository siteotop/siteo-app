<template>

<v-container  fluid>
<v-row>

  <v-col cols="12" sm="6"  md="4" lg="4" xl="4">
    <v-card>
      <v-toolbar>
         Choise
      </v-toolbar>
    <v-card-text>

      <SiteoPlugin
          pluginName="SiteoPluginSelectItems"

          :pluginOptions="{
            eventOnChange: onChangeCategory,
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
      <SiteoPlugin

          pluginName="SiteoPluginSelectItems"

          :pluginOptions="{
            internalApi:citiesLink,
            label: 'Locations',
            eventOnChange: onChangeLocations  ,

            vComp: {
              itemValue:'idUrl',
              itemText:'title',
              hint:'Choose website',
              rounded: false,
             }
        }"
      >
      </SiteoPlugin>



</v-card-text>
    </v-card>
    <v-card>
      <v-toolbar>
         list
      </v-toolbar>
      <v-row v-if="loaded">
        <v-col cols="12"  v-for="i in [1,2,3,4,5,6]" :key="i">
          <v-card>
            <v-card-text>
              <v-skeleton-loader
                 class="mx-auto"
                 type="heading"
               ></v-skeleton-loader>
            </v-card-text>
            <v-card-text>
              <v-skeleton-loader
                 class="mx-auto"
                 boilerplate
                 type=" paragraph, actions"
               ></v-skeleton-loader>
           </v-card-text>
          </v-card>

        </v-col>
      </v-row>
      <v-row v-else  class="pa-2">
          <template v-for="(item, i) in listItems">
            <v-col
              cols="12"
              class="grid-list-md"
            >
            <CardLocations
              v-bind="item"
              :index="i+1"

            >
            </CardLocations>
          </v-col>
          <v-col v-if="i===0||(i%7==0)" >
            <v-card><s-adsense adType="list">
            </s-adsense>
          </v-card>
          </v-col>
        </template>
        <v-col cols="12" v-if="showMore"  >
          <v-card height="100%">
             <v-row justify="center"   alignContent="center" class="fill-height text-center">
               <v-col>
                  <v-btn :loading="loadingMore" :disable="loadingMore" x-large @click="getMoreItems"> Load more</v-btn>
               </v-col>
             </v-row>

           </v-card>
         </v-col>

    </v-row>
    </v-card>
  </v-col>

  <v-col cols="12" sm="12"  md="8" lg="8" xl="8">
    <v-card>
      <v-toolbar>
         Map
      </v-toolbar>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1348.0643095832522!2d19.0576707!3d47.4874077!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc5ae59ceba5%3A0x8393b16f22898a6d!2sCostes%20Restaurant!5e0!3m2!1sen!2sua!4v1584167183725!5m2!1sen!2sua" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </v-card>
  </v-col>

</v-row>
</v-container>


</template>

<script>

import locations from  '../../../store/modules/locations';
import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';

import CardLocations from './Cards/Locations.vue';
import { mapState } from 'vuex';
export default {
    mixins: [MetaInfo, ServerFetch],
    nameModule: 'locations',

    components: {
      CardLocations
    },

    props: {

      /**
        dirty category (with required prefix or suffix)
      */
      category: {
        type: String,
        default :''
      },

      /**
        dirty category (with required prefix or suffix)
      */
      location: {
        type: String,
        default :''
      },


    },

    data() {
        return {
          pageObject: {},
          categoryPrefix: '',
          locationPrefix: '',
          categoryReal: '',
          locationReal: ''
        }
    },

    created() {
        this.findPrefixes();
        this.setClearParamFromPath(this.category, 'category');
        this.setClearParamFromPath(this.location, 'location');

    },

    watch: {
        category(newId, oldId) {
            if (newId!=oldId) {
              this.setClearParamFromPath(newId, 'category');
              this.fetchItem();
            }
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

       ...mapState({
           listItems (state) {
               if (state.locations) {
                   return state.locations.items.objects||[];
               } else {
                 return [];
               }

           },

           countItems(state) {
             if (state.locations) {
                 return state.locations.items.pagination.servercount || 0;
             }
           },

           limitItems(state) {

             if (state.locations) {
                 return state.locations.items.pagination.limit;
             }
           },

           showMore(state) {

             if (state.values) {
                 return state.values.items.pagination.showMore;
             }
           },
         })

    },

    methods: {

      /**
        function for plugin SiteoPluginSelectItems (Locations)
      */
      onChangeLocations(element){
          if (element) {
            this.locationReal =  element.idUrl;
          } else {
            this.locationReal = '';
          }
          this.coreEventOnChange();
      },

      onChangeCategory(element){
          if (element) {
            this.categoryReal  = element.idUrl;
          } else {
            this.categoryReal  = '';
          }
          this.coreEventOnChange();
      },

      coreEventOnChange() {
          let category = this.categoryReal? (this.categoryPrefix + this.categoryReal): undefined;
          let location = this.locationReal? (this.locationPrefix + this.locationReal): undefined;
          this.$router.push({name: 'locations', params:{category: category, location:location}})
      },

      /**
        function for plugin SiteoPluginSelectItems (values)
      */
      onChangeValues(){

      },


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
