<template>

  <SettingsChildren v-if="true"></SettingsChildren>
  <v-list v-else>
      <template v-for="(valueClass, nameSett) in defaultClass" >
      <v-list-tile v-if="nameSett=='b'||nameSett=='t'" two-line >
        <v-list-tile-content>
            <v-list-tile-title>
              {{nameSett}}
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <span v-if="valueClass">  {{valueClass}} </span>
              <span v-else>  none </span>
            </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
            <component :is="'class-field-'+nameSett" :nameSett="nameSett" v-model="defaultClass[nameSett]"></component>
        </v-list-tile-action>

      </v-list-tile>

      <component v-else  :is="'class-field-'+nameSett" :nameSett="nameSett" v-model="defaultClass[nameSett]"></component>


     </template>
  </v-list>
</template>

<script>

/* {
    b: '', // background-color,
    t: '', // text--color
    a: '', // alignment  text-{breakpoint}[ xs, sm, md, lg, xl]-{position}[right, left, center]
    e: '', // elevation-{n}[0-24],
    v: '', // visibility hidden-{breakpoint}[ xs, sm, md, lg, xl]-{condition}[only, and-down, and-up]
    p: '', // padding  p{direction}[t, b, l, r, x, y, a]-size[0, 1, 2, 3, 4, 5]
    m: '', // margin  p{direction}[t, b, l, r, x, y, a]-size[0, 1, 2, 3, 4, 5]  + mx-auto
    d: '', // display d-{display},
    h: '', // head  topography

},*/

import ClassFieldB from './Background.vue';
import ClassFieldT from './TextColor';
import ClassFieldA from './TextAlign';
import ClassFieldE from './ElevationN';
import ClassFieldV from './Hidden';
import ClassFieldP from './Padding';
import ClassFieldM from './Margin';
import ClassFieldD from './Display';
import ClassFieldH from './TextSize';

import SettingsChildren from '../Children.vue';
console.log(SettingsChildren);
export default {
  components: {
    SettingsChildren,
     ClassFieldB,
     ClassFieldT,
     ClassFieldA,
     ClassFieldE,
     ClassFieldV,
     ClassFieldP,
     ClassFieldM,
     ClassFieldD,
     ClassFieldH,
  },

}


</script>
