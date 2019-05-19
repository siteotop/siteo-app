<template>
<v-fab-transition >
      <v-btn
        v-scroll="onScroll" v-show="needShow"
        fixed
        :large="$root.mobile"
        bottom
        left
        fab
        color="secondary"
        @click="$vuetify.goTo(0, {duration: 40})"
        >
        <v-icon>$vuetify.icons.up</v-icon>
      </v-btn>
  </v-fab-transition>
</template>

<script>

import PageScroll from './_extends/PageScroll';
export default {
  extends: PageScroll,
  data() {
    return {
      needShow: false,
    }
  },

  watch: {
    offsetTop(current, before) {
        this.needShow = false;
        if (this.needShowAction) {
         if (current<before) {
           this.needShow = true;
         }
       }
    }
  }

}
</script>
