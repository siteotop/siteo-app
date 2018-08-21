<template>

<v-select
   :items="items"
   v-model="valueData"
   :label="$options.$type"

 ></v-select>

</template>


<script>

import MixinVModelInput from 'template-admin/components/Settings/mixins/v-model-input';
import * as  HelperValues from  './helper-values';

export default {

 mixins: [MixinVModelInput],
 $HelperValues: HelperValues,

  data() {

      return {
          menuActive: false,

      }

  },

  methods: {

    multiplyArray (prefix, array1, array2,  connector) {
          var newarray = [''];
          if (!connector) {
            connector = '';
          }
          for (let i in array1 ) {
              for(let j in array2) {
                newarray.push(prefix+ array1[i]+connector+array2[j])
              }
          }

          return newarray;

    }
  }





}

</script>
