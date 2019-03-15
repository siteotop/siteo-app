<template>

<div >
  <v-autocomplete
    v-if="!propsMenu"
     v-model="selectedItems"

     :items="generatedProps"
     box
     chips
     color="blue-grey lighten-2"
     label="Props"
     item-text="name"
     item-value="name"
     multiple
     append-outer-icon="settings"
     @click:append-outer="clickOnIcon"

   >
     <template
       slot="selection"
       slot-scope="data"
     >
       <v-chip
         :selected="data.selected"
         close

         @input="data.parent.selectItem(data.item)"
       >
       <v-avatar class="teal">{{ data.item.name[0] }}</v-avatar>
         {{ data.item.name }}
       </v-chip>
     </template>
     <template
       slot="item"
       slot-scope="data"
     >
       <template v-if="typeof data.item !== 'object'">
         <v-list-tile-content v-text="data.item"></v-list-tile-content>
       </template>
       <template v-else>
         <v-list-tile-action>

            <v-checkbox :input-value="data.tile.props.value" value></v-checkbox>
         </v-list-tile-action>
         <v-list-tile-content>
           <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
           <v-list-tile-sub-title >{{data.item.type}}: {{data.item.default}}</v-list-tile-sub-title>
         </v-list-tile-content>
       </template>
     </template>
  </v-autocomplete>


  <v-card v-if="propsMenu" class="elevation-5" color="grey lighten-4">
    <v-toolbar dense flat card color="grey lighten-3">

      <v-btn @click="propsMenu=false" color="secondary" icon ><AppIcon name="si-arrow-left"></AppIcon></v-btn>
      <v-toolbar-title>Props Values</v-toolbar-title>
     </v-toolbar>
      <v-card-text>
        <PropsMenu  :value="value" :generatedProps="allProps"></PropsMenu>
      </v-card-text>
  </v-card>


</div>
</template>

<script>

import PropsMenu from './PropsMenu.vue'
export default {

  components: {
    PropsMenu
  },

  props: {

      value: {
        type: Object
      },

      allProps: {
        type: Object,

      }


  },

  data() {
      return {
          propsMenu: false,
          selectedItems: Object.keys(this.value)
      }
  },

  watch: {

      selectedItems: function (newArrayProps) {
          //this.$emit('input', value);

          var self = this, newObjectProps = {};
          newArrayProps.map(function (newProp) {
              if (!self.value[newProp]) {
                // if Boolean
                var defaultValue = true;
                if (self.allProps[newProp].component&&self.allProps[newProp].component.default) {
                   defaultValue = self.allProps[newProp].component.default;
                } else {
                  if (self.allProps[newProp].type ==String) {
                    defaultValue = '';
                  }
                }
                newObjectProps[newProp] = defaultValue
              } else {
                newObjectProps[newProp] = self.value[newProp];
              }
          });
          this.$emit('input', newObjectProps);




      }

  },
  methods: {
    clickOnIcon() {
      this.propsMenu = true;
      console.log('click on icon');
    },
    pushNewProp(_name, propObject) {
        var _type= propObject.type, _default=propObject.default, typeString, defaultString = 'undefined';

        if (_type == Boolean) {
          typeString ='Boolean';
        }
        if (_type == String) {
          typeString ='String';
        }
        if (_type == Number) {
          typeString ='Number';
        }

        if (_type == String) {
          typeString ='String';
        }

        if (Array.isArray(_type)) {
           typeString ='Mixed';
        }
      //  console.log(_name );
      //  console.log(_type );
        if (_default) {
          //console.log(_default);
          defaultString = _default.toString();
        }

       return {name: _name, type:typeString, default: defaultString};
    }

  },
  computed: {
     generatedProps() {
        var _genProps = [];
        for ( var nameProp in this.allProps ) {
           _genProps.push( this.pushNewProp(nameProp,this.allProps[nameProp]));
        }
        return _genProps ;
     }
  }


}

</script>
