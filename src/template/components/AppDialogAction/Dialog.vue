<template>
<div>
    <AppAction @click="vDialog=!vDialog" v-bind="actionProps" to=''></AppAction>
    <v-dialog
      v-if="vDialog"
      v-model="vDialog"
      width="600"
      persistent
      :fullscreen="$vuetify.breakpoint.xs"
    >
      <v-card>
        <v-toolbar dark dense color="secondary">
          <v-spacer></v-spacer>
          <v-btn @click="vDialog=false" icon flat><AppIcon name="si-close"></AppIcon></v-btn></v-toolbar>
        <AutoOrderTabs></AutoOrderTabs>
      </v-card>
    </v-dialog>
</div>
</template>

<script>

export default {
  props: {
      actionProps: {
        type: Object
      }
  },
  data() {
    return  {
      vDialog: false
    }
  }

}
</script>
