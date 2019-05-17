<template >

<v-menu :close-on-content-click="false"  :close-on-click="false" eager >
<template v-slot:activator="{on}">
<v-container fill-height class="pa-0 ma-0"  v-on="on" :style="{cursor:'pointer'}">
<v-layout   class="pa-0 ma-0" align-center>
  <template v-for="(color, index) in value">
  <v-flex  text-xs-center >
    <v-sheet height="100%"  :color="color">
    {{index}}
  </v-sheet>
  </v-flex >
 </template>
</v-layout>
</v-container>
</template>
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
</v-menu>

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
