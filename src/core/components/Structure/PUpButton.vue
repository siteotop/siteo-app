<template>
<v-fab-transition >
  <v-btn
    v-if="showedOnMount"
    v-scroll="onScroll" v-show="needShow"
    fixed
    bottom
    fab
    :large="cnf.a"
    :x-large="cnf.b"
    :left="cnf.c"
    :right="cnf.d"
    :color="cnf.f||'secondary'"
    @click="$vuetify.goTo(0, {duration: 40})"
    >
    <v-icon :large="cnf.a" :x-large="cnf.b" >$vuetify.icons.up</v-icon>
  </v-btn>
</v-fab-transition>
</template>

<script>

import PageScroll from './extends/PageScroll';
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
