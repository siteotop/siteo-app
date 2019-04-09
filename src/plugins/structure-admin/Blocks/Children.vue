<template>
<div class="mt-3">
    <v-layout v-if="isTypeComponents" >
      <draggable v-model='childrenList' style="width:100%;" :options="{group:'children', handle:'.draggable'}" @start="startDragg=true" @end="startDragg=false">
        <v-flex v-for="(component, indexComponent) in childrenList" :key="indexComponent">
          <v-card :class="'ml-'+treeIndex">
            <v-toolbar dense flat>
              <v-btn small  icon class="draggable">
                <AppIcon  name="si-drag" > </AppIcon>
              </v-btn>
              <v-toolbar-title class="pl-0 ml-0 subheading">{{component._n}} {{indexComponent}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn v-if="component._ch" @click="menuList[indexComponent].activeMenu=!menuList[indexComponent].activeMenu"  small  icon  class="draggable">
                <AppIcon scale="1.2" :name="menuList[indexComponent].activeMenu?'si-list-expand':'si-list-split'" > </AppIcon>
              </v-btn>
              <v-menu  :nudge-width="100" min-width="300" :close-on-content-click="false" lazy z-index="999">
                <template slot="activator">
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar dense><v-toolbar-title>{{component._n}}</v-toolbar-title></v-toolbar>
                  <v-card-text></v-card-text>
                  <v-card-actions></v-card-actions>
                </v-card>
                <v-list>
                  <v-list-tile
                    v-for="(item, index) in Object.keys(component)"
                    :key="index"
                    @click=""
                    v-if=""
                  >
                    <v-list-tile-title v-text="item"></v-list-tile-title>
                  </v-list-tile>
                </v-list>
             </v-menu>
            </v-toolbar>
            <v-card-text v-if="menuList[indexComponent].activeMenu" class="pa-0 ma-0 pl-1">
              <SettingsChildren :treeIndex="treeIndex+1" v-if="component._ch" :componentName="component._n"
              typeHelper="helperChildren"  v-model="component['_ch']">
              </SettingsChildren>
            </v-card-text>
          </v-card>
        </v-flex>
      </draggable>
    </v-layout>
    <PropsSettingsList v-else  :objectProps="childrenList" ></PropsSettingsList>
    <v-menu v-model="menu" :close-on-content-click="false" lazy z-index="1000" min-width="300" v-show="!startDragg" offset-x class="text-xs-center pb-3">
      <v-btn slot="activator" flat>+ Add {{typeHelper}} </v-btn>
      <v-card>
        <v-toolbar dense >

          <v-toolbar-title> {{typeHelper}} </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn :disabled="!childrenList.length"   icon v-if="!isTypeComponents" @click="eventAll('addDefaultValue')"><AppIcon name="si-clear"></AppIcon></v-btn>
          <v-btn :disabled="!childrenList.length"  icon  @click="eventAll('removeComponentFromList')"><AppIcon name="si-delete"></AppIcon></v-btn>
          <v-btn icon ><AppIcon @click="menu=false" name="si-close"> </AppIcon></v-btn>
        </v-toolbar>

        <v-list >
          <v-list-tile
            v-for="(name, indexComponent) in childrenComponents()"
            :key="indexComponent"
            @click=""
          >
            <v-list-tile-content>
                <v-list-tile-title>{{name}}</v-list-tile-title>
                <v-list-tile-sub-title v-if="issetNames[name]" v-html="issetNames[name].value"></v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon :disabled="noDublicateChild&&issetNames[name]!=undefined"   @click="addComponentToList(name)"><AppIcon name="si-add"></AppIcon></v-btn>
            </v-list-tile-action>
            <v-list-tile-action v-if="!isTypeComponents">
              <v-tooltip lazy top>
                <v-btn slot="activator" icon :disabled="issetNames[name]==undefined||(issetNames[name]&&issetNames[name].default==issetNames[name].value)"   @click="addDefaultValue(name)"><AppIcon name="si-clear"></AppIcon></v-btn>
                <span v-if="issetNames[name]" v-html="issetNames[name].default"></span>
              </v-tooltip>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn  icon :disabled="issetNames[name]==undefined"  @click="removeComponentFromList(name)"><AppIcon name="si-delete"></AppIcon></v-btn>
            </v-list-tile-action>

          </v-list-tile>
        </v-list>
     </v-card>
    </v-menu>
    <div v-if="draggable" v-show="startDragg">
        <v-subheader class="red--text">
          <AppIcon name="si-delete"></AppIcon> Delete Zone
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
import _cloneDeep from 'lodash/cloneDeep';
import * as helperComponents from '../_helper/components';
//import DesignTabsBlock from './ChildrenTabs/DesignList.vue';
import PropsSettingsList from './Props/SettingsList.js';
import  _findIndex from 'lodash/findIndex';
import  _isEqual from 'lodash/isEqual';



export default {

  name: 'SettingsChildren',
  components: {
    draggable,
  //  DesignTabsBlock,
    PropsSettingsList
  },

  props: {

    //it is name for  parent component, which need for  merge settings child component
    componentName: {
      type: String,
      default: ''
    },

    value: {
        type: [Array, Object],
        default : function() {
          return [];
        }
    },
    typeHelper: {
        type: String,
        default: 'helperChildren',
        validator: function (value) {
           return ['helperChildren', 'helperProps', 'helperClass', 'helperData'].indexOf(value)!==-1
        }
    },

    allowChildren: {
      type: [Array, Boolean],
      default: false
    },

    noDublicateChild: {
      type: Boolean,
      default: false
    },

    draggable: {
      type: Boolean,
      default: true
    },

    cloning: {
      type: Boolean,
      default:false
    },

    watchValue: {
      type: Boolean,
      default: false
    },

    treeIndex: {
       type: Number,
       default: 0
    }


  },

  data() {
      return {
        //dialogChildren: false,
        startDragg: false,
        menu: false,
        //array for DesignTabsBlock
        childrenList: [],
        menuList: []
      }
  },

  created() {
     //this.childrenList = this.value;
     console.log('created list ');
     this.connectChildrenList();

  },

  watch: {
    childrenList: {
        handler: function (newList) {
          this.$emit('input', helperComponents[this.typeHelper].zip(newList));
        },
        deep: true
    },

    value: function(newValue, oldValue) {
        if (this.watchValue) {
          if(!_isEqual(newValue, oldValue )) {
            this.connectChildrenList();
          }

        }
    }


  },
  methods: {

     // connect default options to every child element
     connectChildrenList() {
       var inputList = this.value;
       if (this.cloning) {
        inputList=_cloneDeep(inputList);
       }

       this.childrenList=helperComponents[this.typeHelper].unZip(inputList, this.componentName);
       this.createMenuList();
     },

     createMenuList(childrenList) {
        this.menuList = this.childrenList.map(function(element) {
          return {
            activeMenu: false
          };
        });


     },

     startEvent($event){
        console.log($event);
     },

     addComponentToList(NameOfList) {
       var settings = helperComponents[this.typeHelper].createSettings(NameOfList, this.componentName);
       if (!settings) return;
       if (this.noDublicateChild) {
           var index = this.findIndexOfElement(NameOfList);
           if (index !== -1) {
             this.$store.dispatch('generateSystemMessage', NameOfList + ' added early');
             return;
           }
       }
       this.childrenList.push(settings);
       this.createMenuList();

     },

     findIndexOfElement(name) {
        return _findIndex (this.childrenList, {_n:name});
     },

     removeComponentFromList(name) {
       var index = this.findIndexOfElement(name);
       if (index !==-1) {
           this.childrenList.splice(index, 1);
           this.removeComponentFromList(name);
       }
       this.createMenuList();
     },

     childrenComponents() {
       if (Array.isArray(this.allowChildren)) {
         return this.allowChildren;
       } else {
           return helperComponents[this.typeHelper].getAllowList(this.componentName);
       }

     },

     addDefaultValue(name) {
        var index = this.findIndexOfElement(name);
        if (index !==-1) {
            this.childrenList[index].value = this.childrenList[index].default;
        }
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
    isTypeComponents() {
        return this.typeHelper=='helperChildren';
    },

    issetNames() {

      var names = {};
      for (var i in this.childrenList) {
          names[this.childrenList[i]._n] = {
            default:this.childrenList[i].default,
            value:this.childrenList[i].value };
      }
      return names;
    }
  }

}

</script>
