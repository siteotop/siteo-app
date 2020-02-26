<template>
  <v-card :style="{width: '500px'}">
  <v-row>
      <v-col cols="4"  v-for="(colorOptions, colorName ) in themeColorsKebab" :key="colorName"  >
        <v-card tile v-for="(shadowOptions, shadowName) in colorOptions.shades"
        :key="shadowName"
        :class="shadowOptions.value.name +' '+shadowOptions.value.text"
        >
          <v-card-text class="ma-0 pa-1 pt-3 pb-3" :style="{cursor:'pointer'}" @click="setNewActiveClass(shadowOptions.value)">
            <v-row >
              <v-col >
                  {{shadowOptions.value.name}}
              </v-col>
              <v-col >
                <v-icon  v-if="valueData==shadowOptions.value.name">$vuetify.icons.success</v-icon>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
  </v-row>
</v-card>
</template>

<script>

import ExtendPalette from './extends';

export default {

  extends: ExtendPalette,


  computed: {

      themeColorsKebab() {
         var colorsKebab={};

        // const basicColorsForTheme =   this.$vuetify.theme;
         var themeColors = {primary:1, secondary:1, accent:1};
         //return themeColors;
         for ( var nameColor in themeColors) {

            colorsKebab[nameColor] = {
              value: this.createValue([nameColor]),
              shades: {}
            }
            for (var nameShadow in this.$options.$colors.grey) {

                var shadeColorKebab ;
                if (nameShadow =='base') {
                  shadeColorKebab = [nameColor];
                }  else {

                  shadeColorKebab = [nameColor, this.toKebabCase(nameShadow)];
                }
                //

                colorsKebab[nameColor].shades[nameShadow] = {
                    value: this.createValue(shadeColorKebab)
                }


            }
         }
         return colorsKebab;
      }

  },


}

</script>
