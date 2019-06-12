<template>
 <v-select
    v-bind="vComp"
    :loading="loading"
    v-model="valueData"
    :items="items"

    >
 </v-select>
</template>

<script>
import VModelInput from './_mixins/v-model-input';

export default {
  mixins: [VModelInput],

  props: {
    vComp: {
      type: Object
    },

    // when use siteo API
    internalApi: {
      type: String,
      default:''
    },

    // when use link others api
    externalApi: {
      type: String,
      default:''
    },


  },

  data() {
      return  {
        loading: true,
        items: []
      }
  },

  mounted() {

    console.log('fetch api selecteble');

    this.getResource();
    // create axios getting result for every filter
  /**  setTimeout(function(){
      self.items = [
        {value:'ua', text: 'Ukraine'},
        {value:'ru', text: 'Russia'},
        {value:'pl', text: 'Poland'},
    ];
  }, 300)**/
},

  methods:{
      getResource() {
         var self = this;
         if (this.internalApi) {
              var  config = {
                 url: this.internalApi
              }
              this.$store.dispatch('callAPI', config).then(result=>{
                  console.log(result);
                  if (result.status==200&&result.data) {
                      self.items =result.data.items||[];
                  }
                  self.loading = false;
              }).catch(error=>{
                 console.log(error);
                  self.loading = false;
              })
         } else {
            self.loading = false;
         }

      }
  }
}
</script>
