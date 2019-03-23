<template>
<div>
<v-combobox v-model="valueData"
  :items="possibleClass"
  hide-selected
  label="Add your class"
  multiple
  outline
  persistent-hint
  chips
  deletable-chips
>
<v-menu slot="append" v-model="menu" lazy z-index="1000">
  <v-btn slot="activator"  small fab >
    <AppIcon  name="si-settings"></AppIcon>
  </v-btn>
  <ClassHelper v-if="menu"></ClassHelper>
</v-menu>

</v-combobox>

</div>
</template>
<script>


import MixinVModelInput from '../../forms/AppForm/Fields/_mixins/v-model-input';
import ClassHelper from './Class/Helper.vue';
export default {

  mixins: [MixinVModelInput],
  components: {ClassHelper},

  data() {

      return {
        menu:false,
        possibleClass: [],
      }
  },



}
</script>
