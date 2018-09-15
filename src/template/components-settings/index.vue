<template>
  <div>
     hello
  </div>
</template>

<script>

import DesignSettingsPlugin  from './Design/index';
import {DesignComponents} from './admin.js';


export default {

   created() {
      //console.log(this.$root.$options);
      this.$root.$options.SiteoAddPlugin(DesignComponents);
      this.$root.$options.SiteoAddPlugin(DesignSettingsPlugin);

   }


}
</script>
