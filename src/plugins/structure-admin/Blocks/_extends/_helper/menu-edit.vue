<template functional>
<v-menu   min-width="300" :nudge-width="100"  lazy z-index="999">
  <template slot="activator">
    <v-btn icon>
        <AppIcon  name="si-more-vert" > </AppIcon>
    </v-btn>
  </template>
  <v-list>
    <v-list-tile  @click="parent.removeComponentFromList(props.indexComponent)">
      <v-list-tile-title>Remove</v-list-tile-title>
      <v-list-tile-action>
        <v-btn  icon ><AppIcon name="si-delete"></AppIcon></v-btn>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</v-menu>
</template>

<script>
export default {


}
</script>
