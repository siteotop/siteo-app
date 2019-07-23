<template>
<div>
  <PropsSettingsList  :objectProps="childrenList" ></PropsSettingsList>
  <HelperMenuAdd></HelperMenuAdd>
</div>

</template>

<script>

import * as PropsComponents from './Props/Components'
import ExtendsBlock from './_extends/block.js';
import PropsSettingsList from './Props/SettingsList.js';
export default {
  extends: ExtendsBlock,
  name: 'SettingsProps',

  props: {
    noDublicateChild: {
      type: Boolean,
      default: true
    },
  },

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
