<template functional>
  <v-menu :value="parent.menu" @input="(value)=>parent.menu=value" :close-on-content-click="false" lazy z-index="1000" min-width="300" v-show="!parent.startDragg" offset-x class="text-xs-center pb-3">
    <v-flex  slot="activator"><v-btn small :color="parent.activeColor" icon >+ </v-btn></v-flex>
    <v-card>
      <v-toolbar dense >
        <v-toolbar-title> {{parent.typeHelper}} </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="parent.menuAddClose()"><AppIcon  name="si-close"> </AppIcon></v-btn>
      </v-toolbar>
      <v-list >
        <v-list-tile
          v-for="(name, indexComponent) in parent.childrenComponents()"
          :key="indexComponent"
          @click=""
        >
          <v-list-tile-content>
              <v-list-tile-title>{{name}}</v-list-tile-title>
              <v-list-tile-sub-title v-if="parent.issetNames[name]" v-html="parent.issetNames[name].value"></v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon :disabled="parent.noDublicateChild&&parent.issetNames[name]!=undefined"   @click="parent.addComponentToList(name)"><AppIcon name="si-add"></AppIcon></v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
   </v-card>
  </v-menu>
</template>
<script>
export default {


}
</script>
