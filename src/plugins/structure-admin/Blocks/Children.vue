<template>
<div>
    <v-layout column>

      <!-- Header only first level -->
      <v-flex v-if="firstLevel" >

          <v-card  tile :class="'ml-'+treeIndex+' ' +activeColor">
          <v-toolbar dense flat :color="activeColor + ' darken-1'">
            <v-toolbar-title class="pl-0 ml-0 subtitle-1">
              {{getText(componentName) }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <HelperViewStructure
                  :treeComponents="childrenList"
            ></HelperViewStructure>
              <v-btn icon @click="toggleAll()">
               <v-icon>{{$options._icons.tree}}</v-icon>
              </v-btn>
          </v-toolbar>

        </v-card>
      </v-flex>
      <draggable v-model='childrenList' style="width:100%;" :options="{group:'children', handle:'.'+dragClass}" @start="startDragg=true" @end="startDragg=false">
        <v-flex v-for="(component, indexComponent) in childrenList" :key="indexComponent">
          <v-hover>
            <v-card tile  slot-scope="{ hover }" :class="'ml-'+treeIndex+' ' +activeColor">
            <v-toolbar dense flat :color="activeColor">
              <v-btn small :disabled="childrenActive" :style="{cursor:'move'}"  icon :class="dragClass">
                <v-icon>{{$options._icons.drag}}</v-icon>
              </v-btn>
              <!--_name in getText(component.n) -->
              <v-toolbar-title class="pl-0 ml-0 subtitle-1">{{getText(component.n) }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
                <!-- _children in element.h-->
              <v-btn v-if="hover&&component.h||menuList[indexComponent].activeContent" @click="toggleOneElement(indexComponent)"  small  icon max-width="40" >
                <v-icon >{{menuList[indexComponent].activeContent?$options._icons.more:$options._icons.less}}</v-icon>
              </v-btn>
                <!-- Menu edit with pencil-->
              <HelperMenuEdit
                v-if="hover||menuList[indexComponent].activeEdit"
                :component="component"
                :indexComponent="indexComponent">
              </HelperMenuEdit>
                <!-- Additional menu-->
              <HelperMenuActions
                :component="component"
                :indexComponent="indexComponent">
              </HelperMenuActions>

            </v-toolbar>
            <v-card-text v-if="menuList[indexComponent].activeContent" class="pa-0 ma-0 pl-1">
              <!--_name in :componentName="component.n" -->  <!-- _children in element.h-->   <!-- _children in element.h-->
              <SettingsChildren :treeIndex="treeIndex+1" :treeOpenOnStart="treeStatus" v-if="component.h" :componentName="component.n"
              typeHelper="helperChildren"  v-model="component['h']">
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
import HelperViewStructure from './_extends/_helper/view-structure.vue';
import ExtendsBlock  from './_extends/block.js';
import BlocksGallery from './Gallery/index.vue'


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
    SettingsColors,
    BlocksGallery,
    HelperViewStructure
  },

  props: {

    draggable: {
      type: Boolean,
      default: true
    },

    treeIndex: {
       type: Number,
       default: 0
    },

    treeOpenOnStart: {
      type: Boolean,
      default: false
    }


  },


  data() {
      return {
        startDragg: false,
        treeStatus: false
      }
  },

  mounted(){
       //console.log(this.treeOpenOnStart);
       if (this.treeOpenOnStart){
          this.toggleAll();
       }
  },


  methods: {

     startEvent($event){
        console.log($event);
     },

     eventAll(functionOne) {
       var list = this.childrenList.slice(0);
       list.map((element)=>{

          this[functionOne](element.n /*_name*/);
       })
     },

     getHelperName(shortName) {
        var  MAP_NAMES = {
           'n': 'name',  /*_name*/
           'p': 'Props', /*_props*/
           'c': 'Class', /*_class*/
           'd': 'Data', /*_data*/
           'a': 'Attrs', /*_attrib*/
           'h': 'Children', /*_children*/
           'colors':'Colors'
         }
         if (MAP_NAMES[shortName]) {
           return MAP_NAMES[shortName];
         } else {
           return shortName;
         }

     },


     /**
      open first level element for item
     */
     toggleOneElement(indexComponent) {
        this.menuList[indexComponent].activeContent=!this.menuList[indexComponent].activeContent;
        if (this.menuList[indexComponent].activeContent) {
          this.treeStatus = false;
        }
     },

     toggleAll(){

        for (var i in this.menuList) {
           if (this.childrenList[i].h) {
             this.treeView(i);
            }
        }
     },

     /**
      Open all children elements for item
     */
     treeView(indexComponent) {
         if (!this.menuList[indexComponent].activeContent) {
            this.toggleOneElement(indexComponent);
            this.treeStatus = true;
         } else {
           this.toggleOneElement(indexComponent);
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

       /*var colors_comp = {
         Flx: 'cyan lighten-2'
       }

      if (colors_comp[this.componentName]) {
        return colors_comp[this.componentName];
      }*/
       var color = 'blue-grey';
       if (this.treeIndex%2 ==0) {

           return  `${color} `;
       } else {
          return  `${color} lighten-1`;
       }

    },

    dragClass() {
      return 'draggable-'+this.treeIndex;
    },

    firstLevel() {

      return this.treeIndex==0
    }

  }

}

</script>
