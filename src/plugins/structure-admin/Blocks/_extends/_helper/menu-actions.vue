<template functional>
<v-menu   min-width="300" offset-x  eager :z-index="parent.activeIndex">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon>
        <v-icon>$vuetify.icons.menuDots</v-icon>
    </v-btn>
  </template>
  <v-list >
    <template v-if="!parent.noDublicateChild">
    <v-list-item  @click="parent.cloneComponent(props.indexComponent)">
       <v-list-item-content>
           <v-list-item-title>Clone</v-list-item-title>
       </v-list-item-content>
      <v-list-item-action>
        <v-icon>{{parent.$options._icons.block}}</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-list-item  @click="parent.treeView(props.indexComponent)">
       <v-list-item-content>
           <v-list-item-title>Tree View</v-list-item-title>
       </v-list-item-content>
      <v-list-item-action>

      </v-list-item-action>
    </v-list-item>
  </template>
    <v-list-item  @click="parent.removeComponentFromList(props.indexComponent)">
      <v-list-item-content>
        <v-list-item-title>Remove</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
          <v-icon>$vuetify.icons.delete</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
export default {


}
</script>
