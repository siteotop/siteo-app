<template>
<v-card :style="{width: '500px'}">
  <v-layout row wrap v-if="!activeColor">
   <v-flex  xs4  v-for="(colorOptions, colorName ) in colorsKebabCase" :key="colorName" >
      <v-card tile :class="colorOptions.value.name" >
          <v-card-text :style="{cursor:'pointer'}"  @click="openShadesPalette(colorName, colorOptions.value)" >
              <v-layout>
                  <v-flex xs11>
                    {{colorOptions.value.name}}
                  </v-flex>
                  <v-flex xs1>
                       <AppIcon name="check" scale="1" v-if="value==colorOptions.value.name"></AppIcon>
                  </v-flex>
              </v-layout>
          </v-card-text>
      </v-card>
      </v-flex>
  </v-layout>
  <v-layout row wrap v-else >
      <v-btn  @click="closeShadesPalette()" fab ><AppIcon name="si-arrow-left"></AppIcon></v-btn>
      <v-flex xs12 v-for="(colorOptions, colorName ) in colorsKebabCase[activeColor].shades" :key="colorName" >
         <v-card tile :class="colorOptions.value.name+' '+colorOptions.value.text" >
             <v-card-text :style="{cursor:'pointer'}" @click="setNewActiveClass(colorOptions.value)" >
                 <v-layout>
                     <v-flex xs8>
                       {{colorOptions.value.name}}
                     </v-flex>
                     <v-flex xs3>
                       {{colorOptions.value.hex}}
                     </v-flex>
                     <v-flex xs1>
                        <AppIcon name="check" scale="1" v-if="value==colorOptions.value.name"></AppIcon>
                     </v-flex>
                 </v-layout>
             </v-card-text>
         </v-card>
       </v-flex>
  </v-layout>
</v-card>
</template>

<script>
/**
   component for choise color from Material Design Palette
*/
import ExtendPalette from './extends';

export default {

  extends: ExtendPalette,

  data () {
      return  {
          /**
             active color for Material design Palette
             @example 'pink' or 'pink'
          */
          activeColor: '',

      }
  },

  computed: {

      /**
        create object colors with kebab case  naming
        @example return
        colors: {
          pink: {
              value: {name 'pink', hex: '#e91e63'},
              shades: {
                lighten1: {
                  value: {
                    name: 'pink lighten-1',
                    hex: '',
                },
                ...
              }
            }
         },
         ...
      }
      */
      colorsKebabCase(){
        var colorsKebab={};
        for (const [color, shades] of Object.entries(this.$options.$colors)) {
          const nameColorKebab =  this.toKebabCase(color);
          colorsKebab[color] = {
              value: this.createValue([nameColorKebab], shades.base),
              shades: {}
          };
          for (const [name, hex] of Object.entries(shades)) {

            var  shadeColorKebab=[];
           //  if name == base that is mean we need use
            if (name == 'base' ) {
              shadeColorKebab.push(nameColorKebab);
            } else if (color=='shades') {
               shadeColorKebab.push(name);
                //shadeColorKebab = name;
            } else {
                shadeColorKebab = [nameColorKebab, this.toKebabCase(name)];
            }

            colorsKebab[color].shades[name] = {
                value: this.createValue(shadeColorKebab, hex)
              }

          }
        }

        return colorsKebab;

      }
    },

    methods: {
      openShadesPalette(colorName, newClass) {
         this.setNewActiveClass(newClass);
         this.activeColor = colorName;
      },

      closeShadesPalette() {
        this.activeColor = '';
      }
    }
}

</script>
