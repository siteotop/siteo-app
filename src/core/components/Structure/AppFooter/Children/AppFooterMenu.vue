<template functional>
  <v-container >
   <v-layout >
      <v-flex xs12 text-xs-center class="subheading" >
    <v-btn
        v-for="(item, index) in parent.$store.state.APP_INSTANCE.menu"
        :key="index"
        :to="item.path"
        color="white"
        flat
        round
      >
        {{item.title}}
      </v-btn>
    </v-flex>
 </v-layout>
 </v-container>
</template>

<script>

export default {

}
</script>
