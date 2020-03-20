<template functional>
  <v-card>
    <v-card-title>{{props.title}}</v-card-title>
    <v-card-text>
      <div>  {{props.preview}}</div>

    </v-card-text>
    <v-card-actions>
    <v-spacer></v-spacer>    <v-btn disabled>{{parent.$t('rm')}} </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>

export default {

}

</script>
