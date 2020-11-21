<template>
<v-responsive class="mx-auto" width="920">
  <v-app-bar

    fixed
    :style="{top: offsetTop }"
    color="primary"
    dark
    shrink-on-scroll
    prominent
    :src="recipe.picture"
    fade-img-on-scroll
    tag="section"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>
    <v-spacer></v-spacer>

    <v-toolbar-title>{{recipe.jsonStructure.n}}</v-toolbar-title>

    <v-spacer></v-spacer>




    <template v-slot:extension>
      <v-tabs

      v-if="menu.length"
        centered
        center-active
        show-arrows
        v-model="tab" >
        <v-tab
          v-for="(item, i) in menu"
          @click="gotoContent(item.hash)"
          :key="item.hash"
          :href="'#'+item.hash"
          >
          {{item.title}}
        </v-tab>

      </v-tabs>
    </template>
  </v-app-bar>
 <v-container
  style="margin-top:240px;"
  v-scroll="onScroll"
  >
   <v-row>
    <v-col cols="12" class="text-center mb-2">
      <h1 class="text-h6 text-md-h2">{{recipe.title}}</h1>
        {{recipe.description}}
      <ul class="text-left mt-4 subtitle-1">
        <li v-for="(item, i) in menu">
          <a :href="('#'+item.hash)">{{item.title}}</a>
        </li>
      </ul>
    </v-col>
    <v-col v-if="recipe.jsonStructure.pr" id="about-dish" cols="12">
      <PHtml v-bind="{
          cntnt: {t: recipe.jsonStructure.pr},
          classText: 'body-1'
        }">
      </PHtml>
    </v-col>
    <v-col cols="12" v-if="recipe.picture">
      <v-img height="500" :src="recipe.picture"></v-img>
    </v-col>
    <v-col
      id="ingredients"
      cols="12"
      >

      <v-card >
          <v-toolbar color="grey lighten-4" flat>


          <h2>Інгредієнти </h2> <span class="text-h5 grey--text text--lighten-2 pl-1">{{settings.length}}/{{recipe.jsonStructure.ings.length}}</span>

          <v-spacer></v-spacer>



          <v-menu
            v-if="portCount"
            bottom
            left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  v-bind="attrs"
                  v-on="on"
                  title="Кількість порцій"
                >
                  Порцій: {{portCount}} <v-icon right>{{$options._icons.portions}}</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in this.portSelect"
                  :key="i"
                  @click="changePortion(item)"
                >
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>


        </v-toolbar>

        <v-card-text>
          <v-list
            :dark="checkall"
          >
          <v-list-item
          >

            <v-list-item-action>
              <v-checkbox @change="changeAll" v-model="checkall" ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                  <strong> всі </strong>
                </v-list-item-title>
            </v-list-item-content>

          </v-list-item>
          </v-list>
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
        <v-card-text class="mb-3" v-if="settings.length">
          <!--  <v-progress-linear
              v-if="settings.length"

              :value="settings.length"
            >
          </v-progress-linear> -->
          <ShareWindow
            :title="'Скопіювати інгредієнти'"
            :link="selectedText"
            :dialog="false"
            :share="false"
            :width="'100%'"
           >
          </ShareWindow>
        </v-card-text>
          <PAd >
          </PAd>
      </v-card>
    </v-col>
  </v-row>

  <PYv
    id="video"
    @loaded="video=true"
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


  <v-card
  id="how-to"
  class="mt-3"
  >
    <v-toolbar color="grey lighten-4" flat>
      <v-toolbar-title>
         <h2>  Як приготувати</h2>
       </v-toolbar-title>
      <template v-slot:extension>
           {{recipe.jsonStructure.tp}} <v-icon right>{{$options._icons.time}}</v-icon>
           <v-spacer></v-spacer>
           {{recipe.jsonStructure.tc}} <v-icon right>{{$options._icons.time}}</v-icon>
           <v-spacer></v-spacer>
           {{fullTime}} <v-icon right>{{$options._icons.time}}</v-icon>
       </template>

    </v-toolbar>

    <v-card-subtitle>Покроковий рецепт</v-card-subtitle>
    <v-card-text class="pl-0 ml-0">
      <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
        dense

      >
       <template
        v-for="(step, i) in recipe.jsonStructure.sts">
        <v-timeline-item
          v-if="i==3||i==7"
        >
          <v-card>
            <PAd >
            </PAd>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          :id="'step'+i"
          :key="i"
          fill-dot
          class="white--text font-weight-medium "
        >
        <template v-slot:icon>
          <span>{{(i+1)}}</span>
        </template>
          <v-card

            hover
          >
            <v-card-title class="title">
              {{step.t}}
            </v-card-title>

            <v-card-text class="white text--primary">
                 {{step.d}}
            </v-card-text>

            <v-card-actions

            >

              <v-tooltip
                v-if="video&&step.c"
                top
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    small
                    class="mx-0"
                    color="grey"
                    outlined
                    v-bind="attrs"
                    v-on:click.stop="timeVideo(step.c)"
                    v-on="on"
                  >
                    {{step.c}}
                    <v-icon>
                      $vuetify.icons.video
                    </v-icon>
                  </v-btn>
                </template>
                <span>Цей момент у відео</span>
              </v-tooltip>
              <v-spacer>
              </v-spacer>

            </v-card-actions>
          </v-card>
      </v-timeline-item>
     </template>
    </v-timeline>
    <DialogVideoYoutube
       v-if="tVideo"
     :PYv="{
         v: recipe.jsonStructure.v,
         t: recipe.title,
         tc: tVideo
       }"
     @close-dialog="tVideo=false">
    </DialogVideoYoutube>

    </v-card-text>
  </v-card>

  <v-card
    v-if="recipe.jsonStructure.tps.length"
    id="tips"
    class="mt-3"
    dark
    color="blue-grey"
  >
    <v-card-title>
         <h2>Не забувай!</h2>
    </v-card-title>

    <v-card-text>
        <v-alert
          v-for="(tip, i) in recipe.jsonStructure.tps"
          color="blue-grey darken-1"
          dark
          icon="$vuetify.icons.info"
          border="right"
          prominent
        >
            <div class="title">{{tip.t}}</div>
            <div>{{tip.d}}</div>
        </v-alert>
    </v-card-text>
  </v-card>

  <v-card
    class="mt-3"
    v-if="recipe.jsonStructure.d">
    <v-card-text>
      <PHtml v-bind="{
          cntnt: {t: recipe.jsonStructure.d},
          classText: 'body-1'
        }">
      </PHtml>
    </v-card-text>
  </v-card>

<v-lazy>
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
           <v-btn target="_blank" rel="author,nofollw" :href="author.url">Підписатися</v-btn>
         </v-list-item-action>
    </v-list-item>
  </v-card>
</v-lazy>
</v-container>
<script v-html="jsonLtd" type="application/ld+json">
</script>
</v-responsive>
</template>
<script>

import { mapState } from 'vuex';
import PHtml  from  '../../../Structure/PHtml.vue';

import {
  mdiNoodles,
  mdiClockOutline
 } from '@mdi/js'

export default {
  components: {
    PHtml
  },

  _icons: {
    portions: mdiNoodles,
    time:mdiClockOutline
  },

  data() {
    return {
      //selected: [],
      tab: -1,
      settings:[],
      checkall: false,
      portCount: 0, // count of portion
      portSelect:[], // items count for selection
      tempPortions: false,
      menu: [],
      video: false, // when video loaded in frame
      tVideo: false, // timecode for video
      offsetTop: '54px',
      offsets: [],
      timeout: null,

    }
  },
  mounted() {

      if (!this.$vuetify.breakpoint.mobile) {
          this.offsetTop = '64px';
      }
      this.generateMenu();
      this.generatePortions();
  },


  /*created() {

  },*/

  watch: {
    '$vuetify.breakpoint.mobile': function(newm, oldm) {
        if (newm) {
            this.offsetTop = '54px';
        } else {
          this.offsetTop = '64px';
        }
    }
  },

  computed: {
    author() {
      return {
         '@type': this.recipe.jsonStructure.author.t||'Organization',
         'name': this.recipe.jsonStructure.author.n||this.$store.state.appInstance.objectActive.name,
         "url": this.recipe.jsonStructure.author.u || this.$store.getters.CORE_HOST
        }
    },
    jsonLtd() {

        var link = this.$store.getters.CORE_HOST+this.$route.path;
        return {
          "@context": "https://schema.org/",
          "@type": "Recipe",
          "name": this.recipe.jsonStructure.n,
          "image": [
            this.recipe.picture,
            this.recipe.thumb420
          ],
          "author": this.author,
          "datePublished": this.recipe.datePublished.substring(0,10),
          "description":this.recipe.description,
          "prepTime": `PT${this.recipe.jsonStructure.tp}M`,
          "cookTime": `PT${this.recipe.jsonStructure.tc}M`,
          "totalTime": `PT${this.fullTime}M`,
          "keywords": this.recipe.jsonStructure.k,
          "recipeYield": this.recipe.jsonStructure.pc,
          "recipeCategory": this.recipe.jsonStructure.cat,
          "recipeCuisine": this.recipe.jsonStructure.cui,
          /*"nutrition": {
            "@type": "NutritionInformation",
            "calories": "270 calories"
          },*/
          "recipeIngredient": this.recipe.jsonStructure.ings.map(function(i){
            return i.n + ' - '+(i.c||'')+' '+(i.t||'');
          }),
          "recipeInstructions":this.recipe.jsonStructure.sts.map((step, i)=>{
            return {
              "@type": "HowToStep",
              "name": step.t,
              "text": step.d,
              "url": link+"#step"+(i+1),
              "image": step.i
            }
          }) ,

        };
    },
    fullTime() {
        return parseInt(this.recipe.jsonStructure.tp) + parseInt(this.recipe.jsonStructure.tc);
    },
    /**
      generate text for copied
    */
    selectedText() {
       if (this.settings.length>0) {
          this.settings.sort();
          let text=this.recipe.title +':\n' ;
          for (let i in this.settings) {
            let ing = this.recipe.jsonStructure.ings[this.settings[i]];
            text += ing.n+' - '+(ing.c?ing.c:'')+' '+(ing.t?ing.t:'') + '\n';
          }
          return text;
       } else {
         return '';
       }
    },
    ...mapState({
      recipe: state => state.pages.objectActive
    })
  } ,

  methods: {

     /**
      Function for Menu
      go to id element
     */
     async  gotoContent(hash) {
       await  this.$vuetify.goTo('#'+hash, {offset: 100, duration: 40});
         await  new Promise(resolve => setTimeout(resolve, 200))
     },

     /**
      Generate menu for recipe
     */
     generateMenu() {
        var menu = [
          {
            id:"pr",
            hash: 'about-dish',
            title: 'Про страву',

          },
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
            id:"tps",
            hash: 'tips',
            title: 'Поради',
            list: true
          },

        ];

        for (var i in menu) {
           if (menu[i].list){
              if (this.recipe.jsonStructure[menu[i].id].length) {
                this.menu.push(menu[i]);
              }
           } else {
              if (this.recipe.jsonStructure[menu[i].id]){
                this.menu.push(menu[i]);
              }
           }
        }

     },

     /**
       Create portions counts
     */
     generatePortions(){

        if (this.recipe.jsonStructure.pc){
           this.portCount =new Number (this.recipe.jsonStructure.pc);
        }
        if (!isNaN(this.portCount)) {
          this.portSelect.push(this.portCount);
          this.portSelect.push(this.portCount*2);
        }
     },

      /**
        change count portion
        and save temporary portions
      */
      changePortion(count) {
          if (!this.tempPortions) {
              this.tempPortions=[];
             for (let i in this.recipe.jsonStructure.ings) {
               this.tempPortions[i] = this.recipe.jsonStructure.ings[i].c;
             }
          }
          console.log(this.tempPortions);
          this.portCount = count;
          for (let i in this.tempPortions) {
             if (count == this.portSelect[0]) {
               this.recipe.jsonStructure.ings[i].c=this.tempPortions[i];
             } else {
                let newCount = new Number (this.tempPortions[i]);
                if (isNaN(newCount)) {
                  if (this.recipe.jsonStructure.ings[i].c) {
                      this.recipe.jsonStructure.ings[i].c= '2 x '+this.recipe.jsonStructure.ings[i].c;
                  }


                } else {
                  this.recipe.jsonStructure.ings[i].c = newCount*2;
                }
             }
          }

      },

      timeVideo(time) {
        this.tVideo = time;
      },

      async changeAll() {
          if (this.checkall) {
            this.settings=[];
            let end = this.recipe.jsonStructure.ings.length-1;
            for (let i = 0; i <= end; i++) {
                this.settings.push(i);
            }
          } else {
            this.settings = [];
          }
      },
     /***********

     https://github.com/vuetifyjs/vuetify/blob/34a37a06fd49e4c70f47b17e46eaa56716250283/packages/docs/src/layouts/default/Toc.vue
     **/

     setOffsets () {
        const offsets = []
        const toc = this.menu.slice().reverse()
        for (const item of toc) {
          const section = document.getElementById(item.hash)
          if (!section) continue
          offsets.push(section.offsetTop - 200)
        }
        this.offsets = offsets
      },
      async findActiveIndex () {
        //if (this.$vuetify.breakpoint.mobile) return
        const currentOffset = (
          window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        )
        // If we are at the top of the page
        // reset the offset

        if (currentOffset === 0) {

        }
        if (
          this.offsets.length !== this.menu.length
        ) this.setOffsets()
        const index = this.offsets.findIndex(offset => {
          return offset < currentOffset
        })
        let tindex = index > -1
          ? this.offsets.length - 1 - index
          : 0
        if (currentOffset + window.innerHeight === document.documentElement.offsetHeight) {
          tindex = this.menu.length - 1
        }
        const hash = this.menu[tindex].hash;
      //  if (hash === this.$route.hash) return
        this.scrolling = true

        this.tab = hash;

        this.scrolling = false
      },
      onScroll () {
        clearTimeout(this.timeout)
        if (
          this.scrolling
        ) return;

        this.timeout = setTimeout(this.findActiveIndex, 17)
      },


  }

}
</script>
