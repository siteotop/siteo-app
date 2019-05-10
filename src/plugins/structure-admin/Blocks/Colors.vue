<template >


            <v-list>
              <v-list-item  active-class="grey lighten-4"

               v-for="(name, key, i) in value"
               :key="i"

               >

                <v-list-item-content>
                  <v-list-item-title v-text="key"></v-list-item-title>

                </v-list-item-content>
                <v-list-item-action>

                      <HexColor :value="value[key]"  @input="value[key]=$event" ></HexColor>


                </v-list-item-action>

             </v-list-item>
           </v-list>


</template>

<script>

import HexColor from '../ColorPalette/HexColor.vue'

export default {
  
    components: {
      HexColor
    },

    props: {
      value: {
        type: Object
      }
    }
    //extends: SettingsExtends,


}

</script>
