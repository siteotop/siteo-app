<template functional>
<v-menu   min-width="300" :nudge-width="100"  eager :z-index="parent.activeIndex">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon>
        <v-icon>$vuetify.icons.menuDots</v-icon>
    </v-btn>
  </template>
  <v-list>
    <v-list-item v-if="!parent.noDublicateChild" @click="parent.cloneComponent(props.indexComponent)">
      <v-list-item-title>Clone</v-list-item-title>
      <v-list-item-action>
        <v-btn  icon >

          <v-icon>{{parent.$options._icons.block}}</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-list-item  @click="parent.removeComponentFromList(props.indexComponent)">
      <v-list-item-title>Remove</v-list-item-title>
      <v-list-item-action>
        <v-btn  icon >
            <v-icon>$vuetify.icons.delete</v-icon>

        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
export default {


}
</script>
