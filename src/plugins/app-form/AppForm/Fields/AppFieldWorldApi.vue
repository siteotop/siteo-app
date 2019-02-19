<template>
 <v-select v-bind="vComp" v-model="valueData" :items="items">
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


  },

  data() {
      return  {
        items: []
      }
  },

  mounted() {
    console.log('fetch api selecteble');
    var self = this;

    // create axios getting result for every filter
    setTimeout(function(){
      self.items = [
        {value:'ua', text: 'Ukraine'},
        {value:'ru', text: 'Russia'},
        {value:'pl', text: 'Poland'},
    ];
  }, 300)
  }
}
</script>
