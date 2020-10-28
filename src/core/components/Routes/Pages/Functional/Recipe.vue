<template>
<v-container>
  <v-responsive class="mx-auto" width="920">
    <v-row no-gutters>
    <v-col cols="12" class="text-center">
      <h1 class="">{{recipe.title}}</h1>
        {{recipe.description}}
    </v-col>
    <v-col cols="12" v-if="recipe.picture">
      <v-img height="500" :src="recipe.picture"></v-img>
    </v-col>
    <v-col cols="12">

      <v-card>
        <v-card-title>Інгрідієнти</v-card-title>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="recipe.jsonStructure.ings"
          item-key="n"
          show-select
          disable-pagination
          hide-default-footer
          mobile-breakpoint="0"

          >
        </v-data-table>
      </v-card>


    </v-col>
    <v-col cols="12">
        Video
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" v-for="(step, i) in recipe.jsonStructure.sts">
      <v-card >
         <v-card-title>
          <v-avatar>{{i+1}}</v-avatar>  {{step.t}}<v-spacer></v-spacer>{{step.c}}
         </v-card-title>
         <v-card-text>
             {{step.d}}
         </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  </v-responsive>

</v-container>
</template>
<script>

import { mapState } from 'vuex';
export default {
  data() {
    return {
      selected: [],
      headers: [
          {
            text: '',
            align: 'start',
            sortable: true,
            value: 'n',
          },
          {
            text: '',
            align: 'end',

            value: 'c',
          },

          {
            text: '',
            align: 'start',

            value: 't',
          },



        ],
    }
  },

  computed: mapState({
    recipe: state => state.pages.objectActive
  })

}
</script>
