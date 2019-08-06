<template>
<v-layout column>

  <v-flex v-for="(component, indexComponent) in childrenList" :key="indexComponent" class="mb-1">
      <v-sheet tile  light>
        <v-hover>
          <v-toolbar dark slot-scope="{ hover }" flat  height="30" class="py-0" :color="!component.d? colorToolbar: 'orange'">

          <v-avatar
            v-if="firstLevel"
          color="grey darken-1"
              size="30"
            >
            <span>{{(indexComponent+1)}}</span>
       </v-avatar>
          {{getText(component.n)}}
              <v-spacer></v-spacer>
              <!-- _children in element.h-->
            <v-btn v-if="hover&&component.h||menuList[indexComponent].activeContent" @click="toggleOneElement(indexComponent)"  small  icon max-width="40" >
              <v-icon >{{menuList[indexComponent].activeContent?$options._icons.more:$options._icons.less}}</v-icon>
            </v-btn>

            <HelperMenuEdit
              v-if="hover||menuList[indexComponent].activeEdit"
              :component="component"
              :indexComponent="indexComponent">
            </HelperMenuEdit>
        </v-toolbar>
      </v-hover>
        <div v-if="!menuList[indexComponent].activeContent" class="pa-0 ma-0">
          <SettingsData
            v-model="component.d"
            :treeIndex="treeIndex+1"
            :componentName="component.n"
            :showAddMenu="false"
            typeHelper="helperData"
          v-if="component.d">
          </SettingsData>
          <div  v-if="component.h"
              :class="'ml-'+treeIndex"
          >
          <DataEditable
             :treeIndex="treeIndex+1"
             :treeOpenOnStart="treeStatus"
             :componentName="component.n"
             typeHelper="helperChildren"
             v-model="component['h']"

             >
          </DataEditable>
        </div>
      </div>
   </v-sheet>
  </v-flex>
</v-layout>
</template>

<script>

import ExtendsBlock  from './_extends/block.js';
import ExtendsData from './_extends/data.js';

import SettingsChildren from   './Children.vue';

export default {
  extends: ExtendsBlock,
  mixins: [ExtendsData],
  name: 'DataEditable',
  components: {
    SettingsChildren
  },


  computed: {

     colorToolbar() {
       return   this.firstLevel? 'grey darken-2': 'grey darken-1'
     }


  }

}
</script>
