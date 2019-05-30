<template>
  <v-toolbar-items>

      <v-btn v-for="(item, i) in pageMenu" :key="i"
        :title="item._ti"
        :href="item.href"
        v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
        exact flat
      >{{item.title}}</v-btn>
  </v-toolbar-items>
</template>


<script>
export default {

  computed: {

    pageMenu() {
      var page_menu = [];
      this.contentStructure.map(function(section) {

          if (section._props&&section._props._n&&section._props._$) {
              page_menu.push( {title: section._props._n||section._props._ti, _ti: section._props._ti||section._props._n, href: '#'+section._props._$  });
          }

      })
      return page_menu;
    },

  }
}


</script>
