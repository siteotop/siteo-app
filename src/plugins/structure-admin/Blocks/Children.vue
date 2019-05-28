<template>
<div>
    <v-layout >
      <draggable v-model='childrenList' style="width:100%;" :options="{group:'children', handle:'.'+dragClass}" @start="startDragg=true" @end="startDragg=false">
        <v-flex v-for="(component, indexComponent) in childrenList" :key="indexComponent">
          <v-hover>
            <v-card slot-scope="{ hover }" :class="'ml-'+treeIndex+' ' +activeColor">
            <v-toolbar dense flat :color="activeColor">
              <v-btn small :disabled="childrenActive" :style="{cursor:'move'}"  icon :class="dragClass">
                <v-icon>{{$options._icons.drag}}</v-icon>
              </v-btn>
              <v-toolbar-title class="pl-0 ml-0 subtitle-1">{{getText(component._n) }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn v-if="hover&&component._ch||menuList[indexComponent].activeContent" @click="menuList[indexComponent].activeContent=!menuList[indexComponent].activeContent"  small  icon max-width="40" >
                <v-icon >{{menuList[indexComponent].activeContent?$options._icons.more:$options._icons.less}}</v-icon>
              </v-btn>

            <HelperMenuEdit v-if="hover||menuList[indexComponent].activeEdit" :component="component" :indexComponent="indexComponent"></HelperMenuEdit>
            <HelperMenuActions  :component="component" :indexComponent="indexComponent"></HelperMenuActions>

            </v-toolbar>
            <v-card-text v-if="menuList[indexComponent].activeContent" class="pa-0 ma-0 pl-1">
              <SettingsChildren :treeIndex="treeIndex+1" v-if="component._ch" :componentName="component._n"
              typeHelper="helperChildren"  v-model="component['_ch']">
              </SettingsChildren>
            </v-card-text>

          </v-card>
        </v-hover>
        </v-flex>
      </draggable>
    </v-layout>
    <v-layout class="justify-center " ><HelperMenuAdd></HelperMenuAdd></v-layout>

  <div v-if="draggable" v-show="startDragg">
    <v-subheader class="red--text">
      <v-icon color="red">$vuetify.icons.delete</v-icon>
       Delete Zone
    </v-subheader>
    <draggable
      style="border:2px dotted red; width:100%; height:64px;"
      :value="[]"
      @add="startEvent($event)"
      :options="{group:'children', filter: '.ignore-elements'}">
    </draggable>
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable'



import SettingsProps from   './Props.vue';
import SettingsData from   './Props.vue';
import SettingsAttrs from   './Props.vue';
import SettingsClass from   './Props/Class.vue';
import SettingsColors from   './Colors.vue';
import HelperMenuEdit from './_extends/_helper/menu-edit.vue';
import ExtendsBlock  from './_extends/block.js';

export default {
  extends: ExtendsBlock,
  name: 'SettingsChildren',
  components: {
    draggable,
  //  DesignTabsBlock,
    HelperMenuEdit,
    SettingsProps,
    SettingsAttrs,
    SettingsData,
    SettingsClass,
    SettingsColors
  },

  props: {

    draggable: {
      type: Boolean,
      default: true
    },

    treeIndex: {
       type: Number,
       default: 0
    }


  },


  data() {
      return {
        startDragg: false,
      }
  },



  methods: {

     startEvent($event){
        console.log($event);
     },

     eventAll(functionOne) {
       var list = this.childrenList.slice(0);
       list.map((element)=>{
          this[functionOne](element._n);
       })
     },

     getHelperName(shortName) {
        var  MAP_NAMES = {
           '_n': 'name',
           '_p': 'Props',
           '_c': 'Class',
           '_d': 'Data',
           '_a': 'Attrs',
           '_ch': 'Children',
           'colors':'Colors'
         }
         if (MAP_NAMES[shortName]) {
           return MAP_NAMES[shortName];
         } else {
           return shortName;
         }

     }

  },

  computed: {
    childrenActive() {
        for (var i in this.menuList) {
          if (this.menuList[i].activeContent) return true;
        }
        return false;
    },

    activeIndex() {
      return 999 + this.treeIndex;
    },

    activeColor() {
       var color = 'blue-grey';
       if (this.treeIndex) {
         return  `${color} lighten-${this.treeIndex}`;
       } else {
          return color;
       }

    },

    dragClass() {
      return 'draggable-'+this.treeIndex;
    }

  }

}

</script>
