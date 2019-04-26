<template>
<div>
  <PropsSettingsList  :objectProps="childrenList" ></PropsSettingsList>
  <HelperMenuAdd></HelperMenuAdd>
</div>

</template>

<script>

//import SelectableProp from './Props/Selectable.vue'

//import SettingsChildren from  './Children.vue';
//console.log(SettingsChildren);
import * as PropsComponents from './Props/Components'
import ExtendsBlock from './_extends/block.js';
import PropsSettingsList from './Props/SettingsList.js';
export default {
  extends: ExtendsBlock,
  name: 'SettingsProps',
  components: {
      PropsSettingsList
  },

  methods: {
     addDefaultValue(name) {
        var index = this.findIndexOfElement(name);
        if (index !==-1) {
            this.childrenList[index].value = this.childrenList[index].default;
        }
     },
  }
}

</script>
