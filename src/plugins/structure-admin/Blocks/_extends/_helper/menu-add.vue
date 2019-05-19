<template functional>
  <v-menu :value="parent.menu" @input="(value)=>parent.menu=value" eager :z-index="parent.activeIndex" min-width="350" max-width="350" v-show="!parent.startDragg"  offset-x class="text-xs-center pb-3">
    <template v-slot:activator="{ on }">
      <v-flex  v-on="on"><v-btn small  :color="parent.activeColor" icon >+ </v-btn></v-flex>
    </template>

    <v-card>
      <v-toolbar dense >
        <v-toolbar-title> {{parent.typeHelper}} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="parent.menuAddClose()">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pa-0" :style="{maxHeight:'400px', overflowY: 'scroll'}">
      <v-list two-line>
        <v-list-item
          v-for="(name, indexComponent) in parent.childrenComponents()"
          :key="indexComponent"
          @click="parent.addComponentToList(name)"
        >
          <v-list-item-content>
              <v-list-item-title>{{parent.getText(name)}}</v-list-item-title>
              <v-list-item-subtitle >{{parent.getText(name, 'd')}}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="false" v-html="parent.issetNames[name].value"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon :disabled="parent.noDublicateChild&&parent.issetNames[name]!=undefined"   >
              <v-icon>add</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
   </v-card>
  </v-menu>
</template>
<script>
export default {


}
</script>
