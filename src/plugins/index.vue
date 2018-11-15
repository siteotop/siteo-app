<template>
  <div>
     hello
  </div>
</template>

<script>

import DesignSettingsPlugin  from './Design/index';

export default {

   created() {
      this.$root.$options.SiteoAddPlugin(DesignSettingsPlugin);

   }


}
</script>
