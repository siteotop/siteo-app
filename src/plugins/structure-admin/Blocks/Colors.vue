<template >


            <v-list>
              <v-list-tile  active-class="grey lighten-4"

               v-for="(name, key, i) in value"
               :key="i"

               >

                <v-list-tile-content>
                  <v-list-tile-title v-text="key"></v-list-tile-title>

                </v-list-tile-content>
                <v-list-tile-action>

                      <HexColor :value="value[key]"  @input="value[key]=$event" ></HexColor>


                </v-list-tile-action>

             </v-list-tile>
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
