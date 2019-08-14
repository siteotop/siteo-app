<template>
  <v-row>
    <v-col cols="12" v-for="(component, indexComponent) in childrenList" :key="indexComponent">
      <v-sheet class="pa-2" light>
      <v-toolbar dark dense height="30" flat>

        {{component.n}}
        </v-toolbar>
          <SettingsAttrs
            v-model="component.a"
            :componentName="component.n"

            typeHelper="helperAttrs"
            >
          </SettingsAttrs>
      </v-sheet>
    </v-col>
  </v-row>
</template>
<script>
/* component for quick  Edit Menu for Page*/
import ExtendsBlock  from './_extends/block.js';
import SettingsAttrs from   './Props.vue';
export default {
   extends: ExtendsBlock,

   components: {
      SettingsAttrs
   }


}

</script>
