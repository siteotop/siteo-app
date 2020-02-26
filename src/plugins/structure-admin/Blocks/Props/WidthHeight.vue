<template>
<div>
  <v-row >
    <v-col cols="11">
      <v-slider
        v-if="!persent"
        thumb-label="always"
        persistent-hint hint="Absolute value"
        v-bind="vSlider"
        v-model="valueData">
      </v-slider>
      <v-slider
        v-else
        thumb-label="always"
        persistent-hint hint="Persent value"
        v-bind="{
          min: 0,
          max: 100,
          thumbLabel: true,
          inverseLabel: true
          }"
        v-model="valuePersent">
      </v-slider>

    </v-col>
    <v-col cols="1">
      <v-switch class="mt-0" v-model="persent">
      </v-switch>
    </v-col>
  </v-row>
</div>
</template>

<script>

import MixinVModelInput from '../../../forms/AppForm/Fields/_mixins/v-model-input';

export default {
  mixins:[MixinVModelInput],

  props: ['vSlider'],

  data() {
    return {
        persent: false,
        valuePersent: 0
    }
  },

  created() {
      //console.log(this.value);
      // check persent string or absolute number
      if (typeof this.value != 'number') {
        const position = this.value.indexOf('%', 0);
        if (position ==-1) {
            // do nothing
        } else {
            //turn on persent
            this.persent = true;
            this.valuePersent = this.value.substring(0, position);

        }
      }
  },

  watch: {
    // create persent string  for value
    valuePersent(newV, oldV) {
        this.valueData =  ''+ newV + '%';
    }
  }

}

</script>
