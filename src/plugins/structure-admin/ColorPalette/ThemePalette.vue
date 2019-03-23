<template>
  <v-card :style="{width: '500px'}">
  <v-layout>
      <v-flex xs4  v-for="(colorOptions, colorName ) in themeColorsKebab" :key="colorName"  >
        <v-card tile v-for="(shadowOptions, shadowName) in colorOptions.shades"
        :key="shadowName"
        :class="shadowOptions.value.name +' '+shadowOptions.value.text"
        >
          <v-card-text class="ma-0 pa-1 pt-3 pb-3" :style="{cursor:'pointer'}" @click="setNewActiveClass(shadowOptions.value)">
            <v-layout >
              <v-flex >
                  {{shadowOptions.value.name}}
              </v-flex>
              <v-flex >
                <AppIcon name="si-check" scale="1" v-if="value==shadowOptions.value.name"></AppIcon>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
  </v-layout>
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
