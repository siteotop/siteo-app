<template functional>
<v-container>
  <v-responsive class="mx-auto" width="920">
    <v-col cols="12" class="text-center">
      <h1 class="">{{parent.$store.state.pages.objectActive.title}}</h1>
        {{parent.$store.state.pages.objectActive.description}}
    </v-col>
    <v-col cols="12">
      <v-img height="500" :src="parent.$store.state.pages.objectActive.picture"></v-img>
    </v-col>
  </v-responsive>

</v-container>
</template>
<script>
export default {

}
</script>
