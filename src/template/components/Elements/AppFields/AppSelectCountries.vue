<template>

  <v-layout row wrap>

        <v-flex xs9>
          <AppSelect v-on:change=""  :el="el" :value="el.value"></AppSelect>
        </v-flex>
        <v-flex xs2 class="pt-2">
             <AppGpsFixed v-on:gpsReady="setCountry($event)" v-on:gpsSend="setForceCountry($event)"  :startGPS="el.autoStartGPS"></AppGpsFixed>
        </v-flex>

  </v-layout>


</div>


</template>


<script>

import AppSelect from './AppSelect.vue';
import AbstractInput from './mixins/input.js';
import AppGpsFixed from '../AppGpsFixed.vue';

export default {
  mixins: [AbstractInput],
  components: {AppSelect, AppGpsFixed},


  data() {
    return {
      countryAlpha2: '',
      //elementSelect: CreateSelectResource({resource_name: 'countryAlpha2'})
    }
  },

  methods: {

        setCountry(newCountry)
        {
          console.log(newCountry);
            if (!this.el.value) {
               this.el.value = newCountry;
            }

        },

        setForceCountry(newCountry)
        {
          console.log(newCountry);
          this.el.value = '';
          this.el.value = newCountry;
        }

  }


}


</script>
