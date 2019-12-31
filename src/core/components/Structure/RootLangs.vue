<template functional>
  <v-menu eager top >
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
        >
          {{parent.$store.getters.getSiteoConfig('lang')}}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in parent.$store.state.appInstance.objectActive.langs"
          :key="index"
          tag="a"

          :href="item.url"
        >
          <v-list-item-title><strong>{{ item.lang }}</strong> - {{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
