<template  >
  <v-menu  max-height="600" height="500" width="500" max-width="600">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon  >
          <v-icon>$vuetify.icons.info</v-icon>
      </v-btn>
    </template>
  <v-card  color="grey" style="o">
    <v-card-text>
     <v-row>
           <v-col>
              <code>{{JSON.stringify(treeComponents, null, 1)}}</code>
           </v-col>
       </v-row>
    </v-card-text>
  </v-card>
</v-menu>
</template>

<script>

export default {
   props: {
     treeComponents: {
       type: [Object,Array],
    }
   },
  data() {
    return {
      showJsonDesign:true
    }
  }

}

</script>
