<template>
  <v-responsive class="mx-auto" width="920">
<v-container>

    <v-row>
    <v-col cols="12" class="text-center mb-2">
      <h1 class="text-h2">{{recipe.title}}</h1>
        {{recipe.description}}
      <ul>
        <li v-for="(item, i) in menu">
          <a :href="('#'+item.hash)">{{item.title}}</a>
        </li>
      </ul>
    </v-col>
    <v-col cols="12" v-if="recipe.picture">
      <v-img height="500" :src="recipe.picture"></v-img>
    </v-col>
    <v-col id="ingredients" cols="12">

      <v-card >
        <v-card-title><h2 >Інгрідієнти</h2></v-card-title>
        <v-card-text>
          <v-list-item-group
            v-model="settings"
            multiple
            active-class=""
          >
                <v-list-item v-for="(ing, i) in recipe.jsonStructure.ings">
                  <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-checkbox :input-value="active"></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title>
                        {{ing.n}}
                        <span class="grey--text">{{ing.c}} {{ing.t}}</span>
                      </v-list-item-title>
                  </v-list-item-content>
                  </template>
                </v-list-item>
            </v-list-item-group>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <PYv
    id="video"
    v-if="recipe.jsonStructure.v"
        v-bind="{
            cntnt: {
                v: recipe.jsonStructure.v,
                t: 'Відео рецепт '+ recipe.title
              },
            cnf: {}
          }"
      >
    </PYv>

  <h2 id="how-to">Як приготувати </h2>
  <v-subheader>покроковий рецепт</v-subheader>


  <v-row v-for="(step, i) in recipe.jsonStructure.sts">
    <v-col cols="1">
      <v-avatar color="grey lighten-3">{{i+1}}</v-avatar>
    </v-col>
    <v-col cols="10" >
      <v-card flat>
         <v-card-title>
            {{step.t}}
         </v-card-title>
         <v-card-text>
             {{step.d}}
         </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="1">
        {{step.c}}
    </v-col>
  </v-row>



</v-container>
  </v-responsive>
</template>
<script>

import { mapState } from 'vuex';
export default {

  data() {
    return {
      //selected: [],
      settings:[],
      menu: [
        {
          id:"ings",
          hash: 'ingredients',
          title: 'Інгрідієнти'
        },
        {
          id:"v",
          hash: 'video',
          title: 'Відео рецепт'
        },
        {
          id:"sts",
          hash: 'how-to',
          title: 'Як приготувати'
        },
        {
          id:"tps",
          hash: 'strava',
          title: 'Поради'
        },
        {
          id:"d",
          hash: 'strava',
          title: 'Про страву'
        },

      ],

    }
  },

  computed: mapState({
    recipe: state => state.pages.objectActive
  })

}
</script>
