<template functional>
<v-combobox
  :value="props.value"
  :items="possibleClass"
  hide-selected
  :label="parent.getText(props.forProp)||'For class'"
  @input="listeners.input"
  multiple
  outline
  persistent-hint
  chips
  deletable-chips
>
 <template v-slot:append>
  <v-menu min-width="300" :close-on-content-click="false" eager z-index="800" >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on"  small fab >
        <AppIcon  name="si-settings"></AppIcon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <SettingsProps
          :componentName="props.componentName"
          :value="props.value"
          :watchValue="true"
          @input="listeners.input"
          typeHelper="helperClass"
          :allowChildren="props.allow"
         >
        </SettingsProps>
      </v-card-text>
    </v-card>
  </v-menu>
 </template>
</v-combobox>
</template>
<script>


export default {

}
</script>
