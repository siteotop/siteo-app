<template>
<div>

  <PropsSettingsList  :objectProps="childrenList" ></PropsSettingsList>
  <v-menu v-model="menu" :close-on-content-click="false" lazy z-index="1000" min-width="300"  offset-x class="text-xs-center pb-3">
    <v-flex class="text-xs-center" slot="activator"><v-btn small color="pink" dark icon fab>+ </v-btn></v-flex>
    <v-card>
      <v-toolbar dense >

        <v-toolbar-title> {{typeHelper}} </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn :disabled="!childrenList.length"   icon  @click="eventAll('addDefaultValue')"><AppIcon name="si-clear"></AppIcon></v-btn>

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
          <v-list-tile-action >
            <v-tooltip lazy top>
              <v-btn slot="activator" icon :disabled="issetNames[name]==undefined||(issetNames[name]&&issetNames[name].default==issetNames[name].value)"   @click="addDefaultValue(name)"><AppIcon name="si-clear"></AppIcon></v-btn>
              <span v-if="issetNames[name]" v-html="issetNames[name].default"></span>
            </v-tooltip>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
   </v-card>
  </v-menu>
</div>

</template>

<script>

//import SelectableProp from './Props/Selectable.vue'

//import SettingsChildren from  './Children.vue';
//console.log(SettingsChildren);
import * as PropsComponents from './Props/Components'
import ExtendsBlock from './_extends/block.js';
import PropsSettingsList from './Props/SettingsList.js';
export default {
  extends: ExtendsBlock,
  name: 'BlockProps',
  components: {
      PropsSettingsList
  },

  methods: {

     findIndexOfElement(name) {
        return _findIndex (this.childrenList, {_n:name});
     },

     addDefaultValue(name) {
        var index = this.findIndexOfElement(name);
        if (index !==-1) {
            this.childrenList[index].value = this.childrenList[index].default;
        }
     },
  }
}

</script>
