<template functional>
  <component is="v-flex" v-for="(component, indexComponent) in childrenList">
    <v-card>
      <v-toolbar dense flat>
        <v-btn small  icon :style="{cursor:'move'}" class="draggable">
        <AppIcon  name="si-drag" > </AppIcon>
      </v-btn>
      <v-toolbar-title class="pl-0 ml-0 subheading">{{component._n}}</v-toolbar-title>

      </v-toolbar>
    </v-card>
  </component>

</template>
<script>
import * as SettingsBlocks from '../';
import ChildrenHeaderSlot from './HeaderSlot.vue';


const resolvePropertyName = function(shortName) {
   var  MAP_NAMES = {
      '_n': 'name',
      '_p': 'Props',
      '_c': 'Class',
      '_d': 'Data',
      '_ch': 'Children',
      'colors':'Colors'
    }
    if (MAP_NAMES[shortName]) {
      return MAP_NAMES[shortName];
    } else {
      return shortName;
    }

}

export default {

    name: 'DesignTabsBlock',


    props: {
        designStructure: {
          type: [Array],
          default: function () {
            return [];
          }
        },
        children: {
          type: Boolean,
          default: false
        }


    }




}
</script>
