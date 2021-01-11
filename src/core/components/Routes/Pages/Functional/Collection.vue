<template>
<v-container>
    <v-responsive class="mx-auto" width="920">
      <v-container
       >
       <v-row>
        <v-col cols="12" class="text-center mb-2">
          <h1 class="text-h5 text-md-h2">{{collection.title}}</h1>
            {{collection.description}}
          <ul class="text-left mt-4 subtitle-1">
            <li :key="i" v-for="(item, i) in menu">
              <a
              :href="('#'+item.hash)"
              @click="gotoContent(item.hash)"
              >
              {{item.title}}
              </a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12">
          <PHtml v-bind="{
              cntnt: {t:      collection.jsonStructure.d
                },
              classText: 'body-1'
            }">
          </PHtml>
        </v-col>
      </v-row>

      <v-card
        elevation="1"
        class="mx-0 mb-3"
        :id="'collect-'+i"
        :key="i"
        v-for="(item, i) in collection.jsonStructure.list">
        <v-card-title class="">
         <v-avatar class="mr-2" color="primary">
              {{(i+1)}}
         </v-avatar>
          <h2 class="text-h4"> {{item.t}} </h2>
        </v-card-title>
        <v-card-text>

          <PYv
            id="video"
            @loaded="video=true"
            class="mb-5"
            v-if="item.v"
                v-bind="{
                    cntnt: {
                        v: item.v,
                      //  t: 'Відео рецепт '+ recipe.title
                      },
                    cnf: {}
                  }"
              >
          </PYv>

          <PHtml v-bind="{
              cntnt: {
                  t: item.d
                },
              cnf: {
                  n: (i%2==0)?0:1
              },
              classText: 'body-1'
            }">
          </PHtml>
        </v-card-text>
        <v-card-actions>
          <v-spacer>
          </v-spacer>
          <v-btn
            :to="item.p"
            tag="a"
          >
            {{item.t||collection.jsonStructure.b}}
          </v-btn>
        </v-card-actions>
      </v-card>
        <v-row>
            <v-col v-if="collection.jsonStructure.f">
              <v-col cols="12">
                <PHtml v-bind="{
                    cntnt: {t: collection.jsonStructure.f},
                    classText: 'body-1'
                  }">
                </PHtml>
              </v-col>
            </v-col>

        </v-row>
     </v-container>
    </v-responsive>
</v-container>
</template>


<script>
import { mapState } from 'vuex';
import PHtml  from  '../../../Structure/PHtml.vue';
import mixinFunctional from './mixin.js';
export default {
  mixins: [mixinFunctional],
  components: {
    PHtml
  },
  data() {
      return {
        menu: []
      }
  },
  computed: {

    ...mapState({
      collection: state => state.pages.objectActive
    })
  },

  created() {
      this.generateMenu();
  },


  methods: {
    generateMenu() {

       for (var i in this.collection.jsonStructure.list) {
         var item = this.collection.jsonStructure.list[i];
         var menu = {
            hash: 'collect-'+i,
            title: item.mt||item.t
         }
        this.menu.push(menu);

    }
  }
}

}
</script>
