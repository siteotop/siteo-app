<template functional>
<v-combobox
  :value="props.value"
  :items="possibleClass"
  hide-selected
  :label="props.forProp||'For class'"
  @input="listeners.input"
  multiple
  outline
  persistent-hint
  chips
  deletable-chips
>
  <v-menu min-width="300" slot="append" :close-on-content-click="false" lazy z-index="800" >
    <v-btn slot="activator"  small fab >
      <AppIcon  name="si-settings"></AppIcon>
    </v-btn>
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
</v-combobox>
</template>
<script>


export default {

}
</script>
