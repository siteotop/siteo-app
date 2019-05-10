<template functional>
<v-menu   min-width="300" :nudge-width="100"  eager z-index="999">
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon>
        <AppIcon  name="si-more-vert" > </AppIcon>
    </v-btn>
  </template>
  <v-list>
    <v-list-item v-if="!parent.noDublicateChild" @click="parent.cloneComponent(props.indexComponent)">
      <v-list-item-title>Clone</v-list-item-title>
      <v-list-item-action>
        <v-btn  icon ><AppIcon name="si-dublicate"></AppIcon></v-btn>
      </v-list-item-action>
    </v-list-item>
    <v-list-item  @click="parent.removeComponentFromList(props.indexComponent)">
      <v-list-item-title>Remove</v-list-item-title>
      <v-list-item-action>
        <v-btn  icon ><AppIcon name="si-delete"></AppIcon></v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
export default {


}
</script>
