<template>
<v-container
  class="recipeWidth"
  >
  <SiteoBreadcramps
    :lastTitle="selfObject.jsonStructure.n"
  >
  </SiteoBreadcramps>
   <v-row>
    <v-col cols="12" class="text-center mb-2">
      <h1 class="text-h5 text-md-h2">{{selfObject.title}}</h1>
        {{selfObject.description}}
      </v-col>
        <v-col cols="12" v-if="selfObject.picture" style="min-height:200px;">

          <picture >
            <source :srcset="selfObject.picture" media="(min-width: 768px)">
            <source :srcset="selfObject.thumb420">
            <img :srcset="selfObject.thumb420" :alt="selfObject.jsonStructure.n" style="width:100%; height:auto">

          </picture>
          <!--<v-img
            eager
            :alt="selfObject.jsonStructure.n"
            min-height="300px"
            width="100%"
            :src="selfObject.picture">
          </v-img> -->
        </v-col>
    <v-col>

      <v-btn
        block
        outlined



        :key="i"
        class="mb-1"
         v-for="(item, i) in menu"
        :href="('#'+item.hash)"
        @click="gotoContent($event,item.hash)"
        tag="a">
          {{item.title}}
      </v-btn>

    </v-col>
    <v-col v-if="selfObject.jsonStructure.pr" id="about-dish" cols="12">
      <PHtml v-bind="{
          cntnt: {t: selfObject.jsonStructure.pr},
          cnf: {n:1},
          classText: 'text-body-1 text-md-h6 font-weight-regular'
        }">
      </PHtml>
    </v-col>

    <v-col
      id="ingredients"
      cols="12"
      >

      <v-card class="pb-8">
          <v-toolbar color="grey lighten-4" flat>


          <h2 class="text-h6 text-md-h4">Інгредієнти </h2>

          <v-spacer></v-spacer>

          <v-btn
            v-if="!activePortion"
            text
            title="Кількість порцій"
            @click="activePortion=true"
          >
            Порцій: {{selfObject.jsonStructure.pc}} <v-icon right>{{$options._icons.portions}}</v-icon>
          </v-btn>
          <RecipePortions
            :ings="selfObject.jsonStructure.ings"
            :portions="selfObject.jsonStructure.pc"
            :icon="$options._icons.portions"
          v-else>
          </RecipePortions>
        </v-toolbar>


          <v-list
            :dark="checkall"
          >
          <v-list-item
            color="grey lighten-1"
            @click="changeAll"
          >

            <v-list-item-action>
              <v-icon v-if="!checkall">$vuetify.icon.checkboxOff</v-icon>
              <v-icon v-else>$vuetify.icon.checkboxOn</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                  <strong> Вибрати всі</strong>
                  <span class=" grey--text text--lighten-2">{{selfObject.jsonStructure.ings.length}}</span>
                </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
          </v-list>
          <v-list-item-group
            v-model="settings"
            multiple
            active-class=""
          >
              <template v-for="(ing, i) in selfObject.jsonStructure.ings">
                <v-list-item
                  v-if="ing.t!=='title'"
                  :key="i"
                  >
                  <template v-slot:default="{ active }">
                  <v-list-item-action>
                    <v-icon v-if="!active">$vuetify.icon.checkboxOff</v-icon>
                    <v-icon
                      color="primary"
                    v-else>$vuetify.icon.checkboxOn</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                      <v-list-item-title>
                        {{ing.n}}
                        <span class="grey--text">{{ing.c}} {{ing.t}}</span>
                      </v-list-item-title>
                  </v-list-item-content>
                  </template>
                </v-list-item>
                <v-list-item disabled v-else>
                    <v-list-item-content>

                          <span class="text-h6">{{ing.n}}</span>
                        </v-list-item-content>
                </v-list-item>
              </template>

            </v-list-item-group>

      <!-- SHARE -->
      <RecipeCopy
        v-if="settings.length"
        :counts="selfObject.jsonStructure.ings.length"
        :settings="settings"
        :ings="selfObject.jsonStructure.ings"
        :title="selfObject.title"
        @close="settings = []"
      >
     </RecipeCopy>
      </v-card>
    </v-col>
    <v-col>
      <PAd >
      </PAd>
    </v-col>
  </v-row>

  <v-card
  id="how-to"
  class="mb-3"
  >
    <v-toolbar color="grey lighten-4" flat>
      <v-toolbar-title>
         <h2 class="text-h6 text-md-h4">  Як приготувати {{selfObject.jsonStructure.n}}</h2>
       </v-toolbar-title>
      <template v-slot:extension>
           {{selfObject.jsonStructure.tp}} <v-icon right>{{$options._icons.time}}</v-icon>
           <v-spacer></v-spacer>
           {{selfObject.jsonStructure.tc}} <v-icon right>{{$options._icons.time}}</v-icon>
           <v-spacer></v-spacer>
           {{fullTime}} <v-icon right>{{$options._icons.time}}</v-icon>
       </template>

    </v-toolbar>
       <v-card-subtitle><h3>Відео рецепт {{selfObject.jsonStructure.n}}</h3></v-card-subtitle>
       <template v-if="selfObject.jsonStructure.v">
       <v-lazy v-model="isActive" id="video" >
         <PYv
           v-if="isActive"
           v-bind="{
               cntnt: {
                   v: selfObject.jsonStructure.v
                 },
               cnf: {}
             }"
         >
     </PYv>
    </v-lazy>
  </template>
     <v-card-subtitle><h3>Покроковий рецепт</h3></v-card-subtitle>
    <v-lazy>
      <v-card-actions>
        <v-spacer></v-spacer>
         <v-btn
          color="primary"
          :disabled="playCook"
          @click="playCook=true">
          Почати готувати
        </v-btn>
        <v-spacer></v-spacer>

    </v-card-actions>
  </v-lazy>
   <template v-if="!playCook">
    <template v-for="(step, i) in selfObject.jsonStructure.sts">
      <v-sheet v-if="i==3||i==7">
          <PAd >
          </PAd>
      </v-sheet>
      <v-sheet
        :id="'step'+i"
        class="pa-3 ma-1">
        <h4 class="text-h6">{{(i+1)}}.  {{step.t}}</h4>
        <div class="mt-3 text-body-1" v-html="step.d" >
        </div>
      </v-sheet>
    </template>
  </template>
    <RecipePlaycook v-else
      :steps="selfObject.jsonStructure.sts"
      :videoId="selfObject.jsonStructure.v"
      :kitchen="selfObject.jsonStructure.kitchen"

    >
    </RecipePlaycook>
    <v-lazy height="50">
      <v-card-actions>
      <v-spacer>
      </v-spacer>
        <v-btn
          color="primary accent-4"
          @click="playShare=true"
        >
         <v-icon left>
            $vuetify.icons.share
         </v-icon>
         Зберегти рецепт
        </v-btn>
      <v-spacer>
      </v-spacer>

    </v-card-actions>
    </v-lazy>
  <ShareWindow
    v-if="playShare"
    @close="playShare=false"
   >
  </ShareWindow>

  </v-card>

  <v-card
    class="mt-3"
    >
    <v-card-text v-if="selfObject.jsonStructure.d">
      <PHtml v-bind="{
          cntnt: {t: selfObject.jsonStructure.d },
          cnf: {n:1},
          classText: 'text-body-1'
        }">
      </PHtml>
    </v-card-text>
    <v-card-subtitle class="title">
      {{selfObject.jsonStructure.ct||'Схожі рецепти страв'}}
    </v-card-subtitle>
    <v-card-text v-if="selfObject.jsonStructure.lnks.length">
    <li
      v-for="(link, i) in selfObject.jsonStructure.lnks"
    >
      <router-link
        :key="i"
        :to="link.u"
      >
        {{link.t}}
      </router-link>
    </li>
    </v-card-text>
  </v-card>

<v-lazy id="author" height="150">
  <v-fab-transition>
  <v-card

    class="my-3 pb-5"
    color="primary"
    >
    <v-card-subtitle class="title white--text">
      Автор
    </v-card-subtitle>
    <v-list-item
          dark
         >
         <v-list-item-avatar light color="primary darken-2">
           {{author.name[0]}}
         </v-list-item-avatar>

         <v-list-item-content>
           <v-list-item-title >{{author.name}}</v-list-item-title>

         </v-list-item-content>
         <v-list-item-action>
           <v-btn target="_blank" rel="author,nofollow,noindex" :href="author.url">Підписатися</v-btn>
         </v-list-item-action>
    </v-list-item>
  </v-card>
</v-fab-transition>
</v-lazy>

<v-card
  v-if="selfObject.jsonStructure.tps.length"
  id="tips"
  class="mt-3 pb-4 mb-4"
  color="grey lighten-3"
>
  <v-card-title>
       <h2 class="text-h6 text-md-h4">Поради і запитання</h2>
  </v-card-title>
  <v-card-subtitle>
    Поради по приготуванні страви {{selfObject.jsonStructure.n}}
  </v-card-subtitle>

  <v-card-text :key="i" v-for="(tip, i) in selfObject.jsonStructure.tps">
      <h3 class="text-title">{{tip.t}}</h3>
      <div v-html="tip.d"></div>
  </v-card-text>
</v-card>

<v-lazy>
  <v-row class="mb-8">
    <v-col>
      <PAd >
      </PAd>
    </v-col>
  </v-row>
</v-lazy>

<script v-html="jsonLtd" type="application/ld+json">
</script>

<script v-html="qaJsonLtd" type="application/ld+json">
</script>
</v-container>
</template>
<script>

import PHtml  from  '../../../Structure/PHtml.vue';
import mixinFunctional from './mixin.js';
import {
  mdiNoodles,
  mdiClockOutline,
  mdiStar
 } from '@mdi/js'

export default {
  mixins: [mixinFunctional],
  props: {
      selfObject: {
        type: Object
      }
  },
  components: {
    PHtml,
    RecipePortions: ()=> import( /* webpackChunkName: "recipe-play" */ './Recipe/Portions.vue'),
    RecipePlaycook: ()=> import( /* webpackChunkName: "recipe-play" */ './Recipe/Playcook.vue'),
    RecipeCopy: ()=> import( /* webpackChunkName: "recipe-play" */ './Recipe/Copy.vue'),
  },

  _icons: {
    portions: mdiNoodles,
    time:mdiClockOutline,
    star: mdiStar
  },

  data() {
    return {
      //selected: [],
      tab: -1,
      settings:[],
      checkall: false,
      activePortion: false, // for active portions component
      menu: [],
      isActive: false,
      playCook: false,
      playShare: false,
      mounted: false
    }
  },
  mounted() {
      this.mounted = true;
  },


  created() {
    this.generateMenu();
  },


  computed: {

    /**
      author for recipe schema
    */
    author() {
      return {
         '@type': this.selfObject.jsonStructure.author.t||'Organization',
         'name': this.selfObject.jsonStructure.author.n||this.$store.state.appInstance.objectActive.name,
         "url": this.selfObject.jsonStructure.author.u || this.$store.getters.CORE_HOST
        }
    },

    qaJsonLtd() {

      var listQa=[];
      if (!this.selfObject.jsonStructure.tps) {
        return false;
      }
        this.selfObject.jsonStructure.tps.map((tip, i)=>{
        if (tip.q) {
          listQa.push( {
          "@type": "Question",
          "name": tip.t,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": tip.d
            }
          })
       }
      })

      if (listQa.length) {
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": listQa
        }
      } else {
        return ''
      }


    },



    /**
      @context https://schema.org/
      @type "Recipe"
    */
    jsonLtd() {

        var link = this.$store.getters.CORE_HOST+this.$route.path;
        return {
          "@context": "https://schema.org/",
          "@type": "Recipe",
          "name": this.selfObject.jsonStructure.n,
          "image": [
            this.selfObject.picture,
            this.selfObject.thumb420
          ],
          "author": this.author,
          "datePublished": this.selfObject.datePublished.substring(0,10),
          "description":this.selfObject.description,
          "prepTime": `PT${this.selfObject.jsonStructure.tp}M`,
          "cookTime": `PT${this.selfObject.jsonStructure.tc}M`,
          "totalTime": `PT${this.fullTime}M`,
          "keywords": this.selfObject.jsonStructure.k,
          "recipeYield": this.selfObject.jsonStructure.pc,
          "recipeCategory": this.selfObject.jsonStructure.cat,
          "recipeCuisine": this.selfObject.jsonStructure.cui,
          /*"nutrition": {
            "@type": "NutritionInformation",
            "calories": "270 calories"
          },*/
          "recipeIngredient": this.selfObject.jsonStructure.ings.map(function(i){
            return i.n + ' - '+(i.c||'')+' '+(i.t||'');
          }),
          "recipeInstructions":this.selfObject.jsonStructure.sts.map((step, i)=>{
            return {
              "@type": "HowToStep",
              "name": step.t,
              "text": step.d,
              "url": link+"#step"+i,
              "image": step.i
            }
          }) ,

        };
    },
    fullTime() {
        return parseInt(this.selfObject.jsonStructure.tp) + parseInt(this.selfObject.jsonStructure.tc);
    },


  } ,

  methods: {

    /**
      Generate menu for selfObject
     */
     generateMenu() {
        var menu = [

          {
            id:"ings",
            hash: 'ingredients',
            title: 'Інгредієнти',
            list: true
          },
          {
            id:"v",
            hash: 'video',
            title: 'Відео рецепт',

          },
          {
            id:"sts",
            hash: 'how-to',
            title: 'Як приготувати',
            list: true
          },
          {
            id:"author",
            hash: 'author',
            title: 'Автор',
          },
          {
            id:"tps",
            hash: 'tips',
            title: 'Поради і запитання',
            list: true
          },



        ];

        for (var i in menu) {
           if (menu[i].list){
              if (this.selfObject.jsonStructure[menu[i].id].length) {
                this.menu.push(menu[i]);
              }
           } else {
              if (this.selfObject.jsonStructure[menu[i].id]){
                this.menu.push(menu[i]);
              }
           }
        }

     },

      async changeAll() {
          this.checkall=!this.checkall;
          if (this.checkall) {
            this.settings=[];
            let end = this.selfObject.jsonStructure.ings.length-1;
            for (let i = 0; i <= end; i++) {
                this.settings.push(i);
            }
          } else {
            this.settings = [];
          }
      },


  }

}
</script>
