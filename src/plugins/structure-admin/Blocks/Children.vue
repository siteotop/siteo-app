<template>
<div class="mt-3">
    <v-layout >
      <draggable v-model='childrenList' style="width:100%;" :options="{group:'children', handle:'.draggable'}" @start="startDragg=true" @end="startDragg=false">
        <v-flex v-for="(component, indexComponent) in childrenList" :key="indexComponent">
          <v-card :class="'ml-'+treeIndex">
            <v-toolbar dense flat>
              <v-btn small  icon class="draggable">
                <AppIcon  name="si-drag" > </AppIcon>
              </v-btn>
              <v-toolbar-title class="pl-0 ml-0 subheading">{{component._n}} {{indexComponent}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn v-if="component._ch" @click="menuList[indexComponent].activeContent=!menuList[indexComponent].activeContent"  small  icon  class="draggable">
                <AppIcon scale="1.2" :name="menuList[indexComponent].activeContent?'si-list-expand':'si-list-split'" > </AppIcon>
              </v-btn>
              <v-menu v-model="menuList[indexComponent].activeEdit"  :nudge-width="100" min-width="500"  max-width="500" :close-on-content-click="false"  :close-on-click="false" lazy z-index="777">
                <template slot="activator">
                  <v-btn icon>
                      <AppIcon  name="si-edit" > </AppIcon>
                  </v-btn>
                </template>
                <v-card v-if="menuList[indexComponent].activeEdit" >
                  <v-toolbar tabs dense>
                    <v-toolbar-title>{{component._n}}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon ><AppIcon @click="menuList[indexComponent].activeEdit=false" name="si-close"> </AppIcon></v-btn>
                    <template v-slot:extension>
                        <v-tabs
                          v-model="menuList[indexComponent].activeTabEdit"
                        >
                          <v-tab
                            v-for="(shortNameSettingBlock, indexTab) in Object.keys(component)"
                            :key="indexTab"
                            v-if="shortNameSettingBlock!='_ch'&&shortNameSettingBlock!='_n'"

                          >
                              {{getHelperName(shortNameSettingBlock)}}
                          </v-tab>
                        </v-tabs>
                    </template>
                  </v-toolbar>
                  <v-card-text>
                    <v-tabs-items   v-model="menuList[indexComponent].activeTabEdit">
                      <v-tab-item
                        v-for="(shortNameSettingBlock, indexBlock) in Object.keys(component)"
                        :key="indexBlock"
                        v-if="shortNameSettingBlock!='_ch'&&shortNameSettingBlock!='_n'"
                      >
                        <v-card flat>
                          <v-card-text>
                            <component
                            :is="'Block'+getHelperName(shortNameSettingBlock)"
                            v-model="component[shortNameSettingBlock]"
                            :componentName="component._n"
                            :typeHelper="'helper'+getHelperName(shortNameSettingBlock)"
                            ></component>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-card-text>

                </v-card>
              </v-menu>
              <v-menu  :nudge-width="100" min-width="300"  lazy z-index="999">
                <template slot="activator">
                  <v-btn icon>
                      <AppIcon  name="si-more-vert" > </AppIcon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-tile  @click="removeComponentFromList(indexComponent)">
                    <v-list-tile-title>Remove</v-list-tile-title>
                    <v-list-tile-action>
                      <v-btn  icon ><AppIcon name="si-delete"></AppIcon></v-btn>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list>
              </v-menu>

            </v-toolbar>
            <v-card-text v-if="menuList[indexComponent].activeContent" class="pa-0 ma-0 pl-1">
              <SettingsChildren :treeIndex="treeIndex+1" v-if="component._ch" :componentName="component._n"
              typeHelper="helperChildren"  v-model="component['_ch']">
              </SettingsChildren>
            </v-card-text>

          </v-card>
        </v-flex>
      </draggable>
    </v-layout>

    <v-menu v-model="menu" :close-on-content-click="false" lazy z-index="1000" min-width="300" v-show="!startDragg" offset-x class="text-xs-center pb-3">
      <v-flex class="text-xs-center" slot="activator"><v-btn small  icon fab>+ </v-btn></v-flex>
      <v-card>
        <v-toolbar dense >
          <v-toolbar-title> {{typeHelper}} </v-toolbar-title>
          <v-spacer></v-spacer>
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


//import DesignTabsBlock from './ChildrenTabs/DesignList.vue';

import  _findIndex from 'lodash/findIndex';


import BlockProps from   './Props.vue';
import BlockData from   './Props.vue';
import BlockClass from   './Props/Class.vue';
import BlockColors from   './Colors.vue';

import ExtendsBlock from './_extends/block.js';

export default {
  extends: ExtendsBlock,
  name: 'SettingsChildren',
  components: {
    draggable,
  //  DesignTabsBlock,

    BlockProps,
    BlockData,
    BlockClass,
    BlockColors
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
           '_ch': 'Children',
           'colors':'Colors'
         }
         if (MAP_NAMES[shortName]) {
           return MAP_NAMES[shortName];
         } else {
           return shortName;
         }

     }

  }

}

</script>
