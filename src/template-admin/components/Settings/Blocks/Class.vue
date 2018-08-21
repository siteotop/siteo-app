<template>
  <div>
    <v-combobox v-model="arrayClass"

      :items="possibleClass"

      hide-selected
      hint="Maximum of 5 tags"
      label="Add your class"
      multiple
      box
      persistent-hint
      chips
      deletable-chips

    ></v-combobox>
  <v-list>
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
</div>
</template>
<script>


import * as ClassComponents from './Class';

//console.log(ClassFields);
export default {

  //name: 'settings-bloks-class',

  components: ClassComponents,

  props: {
      /**
        Object with class
      */
      value: {
          type: Array,
          default: function () {
              return []
          }
      }
  },
  data() {

      return {
        arrayClass: this.value,
        possibleClass: [],
        defaultClass: {}

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
      }
  },

  created() {
        console.log('created new class');
        //_merge(this.defaultClass, this.value.list )
      //  this.defaultClass = Object.assign({}, this.defaultClass, this.value)
  },

  watch: {
    value(newValue, oldValue) {
        if (newValue!==oldValue) {
            this.arrayClass= newValue;
        }
    },
     arrayClass: function(newValue){
          this.$emit('input', newValue );
     },
      defaultClass : {
          handler: function (value) {
             //console.log(value);
             //  for ()
             this.$emit('input', value );
            //this.value = value;

            // _merge(this.value, value );
             //this.value= value;
          },
        deep: true
      }
  }

}
</script>
