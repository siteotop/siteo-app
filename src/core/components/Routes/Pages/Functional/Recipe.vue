<template>
<v-responsive class="mx-auto" width="920">
  <!-- <v-app-bar

    fixed
    :style="{top: offsetTop }"
    color="primary"
    dark
    shrink-on-scroll
    prominent
    :src="recipe.picture"
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

      v-if="mounted"
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
-->
 <v-container
  >
  <SiteoBreadcramps
    :lastTitle="recipe.jsonStructure.n"
  >
  </SiteoBreadcramps>
   <v-row>
    <v-col cols="12" class="text-center mb-2">
      <h1 class="text-h5 text-md-h2">{{recipe.title}}</h1>
        {{recipe.description}}
      </v-col>
        <v-col cols="12" v-if="recipe.picture">

          <picture>
            <source :srcset="recipe.picture" media="(min-width: 768px)">
            <source :srcset="recipe.thumb420">
            <img :srcset="recipe.thumb420" :alt="recipe.jsonStructure.n" style="width:100%;">

          </picture>
          <!--<v-img
            eager
            :alt="recipe.jsonStructure.n"
            min-height="300px"
            width="100%"
            :src="recipe.picture">
          </v-img> -->
        </v-col>
    <v-col>

      <v-btn
        block
        outlined

        color="primary"

        :key="i"
        class="mb-1"
         v-for="(item, i) in menu"
        :href="('#'+item.hash)"
        @click="gotoContent(item.hash)"
        tag="a">
          {{item.title}}
      </v-btn>

    </v-col>
    <v-col v-if="recipe.jsonStructure.pr" id="about-dish" cols="12">
      <PHtml v-bind="{
          cntnt: {t: recipe.jsonStructure.pr},
          cnf: {n:1},
          classText: 'text-body-1 text-md-h6 font-weight-regular'
        }">
      </PHtml>
    </v-col>

    <v-col
      id="ingredients"
      cols="12"
      >

      <v-card >
          <v-toolbar color="grey lighten-4" flat>


          <h2 class="text-h6 text-md-h4">Інгредієнти </h2> <span class="text-h5 grey--text text--lighten-2 pl-1">{{settings.length}}/{{recipe.jsonStructure.ings.length}}</span>

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
        <v-card-subtitle>
            Відмічай інгредієнти, які є в наявності або, які потрібно купити для <b>страви {{recipe.jsonStructure.n}}</b>
        </v-card-subtitle>
        <v-card-text>
          <v-list
            :dark="checkall"
          >
          <v-list-item
            color="grey lighten-1"
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
              <template v-for="(ing, i) in recipe.jsonStructure.ings">
                <v-list-item
                  v-if="ing.t!=='title'"
                  :key="i"
                  >
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
                <v-list-item disabled v-else>
                    <v-list-item-content>

                          <span class="text-h6">{{ing.n}}</span>
                        </v-list-item-content>
                </v-list-item>
              </template>

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
            :appendLink="true"
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

  <v-card
  id="how-to"
  class="mb-3"
  >
    <v-toolbar color="grey lighten-4" flat>
      <v-toolbar-title>
         <h2 class="text-h6 text-md-h4">  Як приготувати {{recipe.jsonStructure.n}}</h2>
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
    <v-card-text >

      <v-alert
        :value="true"
        :color="!playCook.length?'blue-grey darken-1':'blue-grey'"
        dark
        >
        <div class="title">
          Перед приготуванням страви
        </div>
        <v-row >
          <v-col cols="12" class="grow">
            Підготуйте всі <a href="#ingredients">інгредієнти</a> для страви <strong>"{{recipe.jsonStructure.n}}"</strong>
            <div v-if="recipe.jsonStructure.kitchen.length">
            Підготуйте основні засоби для приготування:
              <v-chip v-for="(item,i) in recipe.jsonStructure.kitchen"
              :key="i"
              small
              >
                {{item}}
              </v-chip>
            </div>
      </v-col>
         <v-col cols="12" class="text-right">
           <v-lazy>
             <v-btn
              color="primary"
              :disabled="playCook.length!=0"
              @click="playStart">
              Почати готувати
            </v-btn>
          </v-lazy>
         </v-col>
       </v-row>
      </v-alert>

    <template v-for="(step, i) in recipe.jsonStructure.sts">

      <v-card  class="mb-2" v-if="i==3||i==7">
        <PAd >
        </PAd>
      </v-card>
      <v-card
        :class="(playCook[i]==2?'grey--text lighten-2':'') + ' mb-2'"
        hover

      >
        <v-card-title>
          {{(i+1)}}.  {{step.t}}
        </v-card-title>

        <v-card-text class="text-body-1" v-html="step.d" >
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
          <template v-if="!!playCook[i]">
            <v-icon left v-if="playCook[i]==2" color="green">$vuetify.icons.success</v-icon>


            <v-progress-circular
                 v-else
                 :rotate="360"
                 :width="5"
                 :value="devideProgres(i)"
                 color="teal"
                 class="mr-2"
            ></v-progress-circular>


          </template>
          <VSlideXTransition

          >
          <v-btn
              v-if="playCook[i]>0"
            :color="playCook[i]!==2?'primary':'grey'"
            :disabled="playCook[i]==2"
            @click="playStart(i)"
          >
             Готово
          </v-btn>
          </VSlideXTransition>
        </v-card-actions>
      </v-card>
    </template>
    <v-fab-transition>
        <v-card
          v-if="playFinish"
        >
          <v-card-title class="title">
           ВІТАЄМО І СМАЧНОГО! Так тримати!
          </v-card-title>

          <v-card-text >
               Ми сподіваємось у вас все вийшло! Бажаємо вам приємного настрою та наснаги в нових кулінарних починаннях!
           <v-row>
             <v-col>
               <v-btn

                 color="primary accent-4"
                 @click="playShare=true"
               >
                <v-icon left>
                   $vuetify.icons.share
                </v-icon>  {{$t('share')}}
               </v-btn>
             </v-col>
             <v-col>
               <v-btn
               color="primary"
               target="_blank"
               :href="author.url">Підписатись на автора</v-btn>
             </v-col>
           </v-row>
          </v-card-text>


        <ShareWindow
          v-if="playShare"
          @close="playShare=false"
         >
        </ShareWindow>
      </v-card>

    </v-fab-transition>

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
    v-if="recipe.jsonStructure.tps.length"
    id="tips"
    class="mt-3"
    dark
    color="primary darken-3"
  >
    <v-card-title>
         <h2 class="text-h6 text-md-h4">Поради і запитання</h2>
    </v-card-title>
    <v-card-subtitle>
      Поради по приготуванні страви {{recipe.jsonStructure.n}}
    </v-card-subtitle>

    <v-card-text>
        <v-alert
          v-for="(tip, i) in recipe.jsonStructure.tps"
          :key="i"
          color="primary darken-2"
          dark
          :icon="tip.q?'$vuetify.icons.help':'$vuetify.icons.info'"
          border="right"
          prominent
        >
            <div class="title">{{tip.t}}</div>
            <div v-html="tip.d"></div>
        </v-alert>
    </v-card-text>
  </v-card>

  <v-card
    class="mt-3"
    >
    <v-card-text v-if="recipe.jsonStructure.d">
      <PHtml v-bind="{
          cntnt: {t: recipe.jsonStructure.d },
          cnf: {n:1},
          classText: 'text-body-1'
        }">
      </PHtml>
    </v-card-text>
    <v-card-subtitle class="title">
      {{recipe.jsonStructure.ct||'Схожі рецепти страв'}}
    </v-card-subtitle>
    <v-card-text v-if="recipe.jsonStructure.lnks.length">
    <li
      v-for="(link, i) in recipe.jsonStructure.lnks"
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

  <v-fab-transition>
  <v-card
    id="author"
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


</v-container>
<script v-html="jsonLtd" type="application/ld+json">
</script>

<script v-html="qaJsonLtd" type="application/ld+json">
</script>
</v-responsive>
</template>
<script>

import { mapState } from 'vuex';
import PHtml  from  '../../../Structure/PHtml.vue';
import mixinFunctional from './mixin.js';
import {
  mdiNoodles,
  mdiClockOutline,
  mdiStar
 } from '@mdi/js'

export default {
  mixins: [mixinFunctional],
  components: {
    PHtml
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
      portCount: 0, // count of portion
      portSelect:[], // items count for selection
      tempPortions: false,
      menu: [],
      video: false, // when video loaded in frame
      tVideo: false, // timecode for video
      //offsetTop: '54px',
      //offsets: [],
      //timeout: null,
      playCook: [],
      playFinish:false,
      playShare: false,

    //  scrollPause: false,
      mounted: false
    }
  },
  mounted() {


      this.mounted = true;
      this.generatePortions();
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
         '@type': this.recipe.jsonStructure.author.t||'Organization',
         'name': this.recipe.jsonStructure.author.n||this.$store.state.appInstance.objectActive.name,
         "url": this.recipe.jsonStructure.author.u || this.$store.getters.CORE_HOST
        }
    },

    qaJsonLtd() {

      var listQa=[];
      if (!this.recipe.jsonStructure.tps) {
        return false;
      }
        this.recipe.jsonStructure.tps.map((tip, i)=>{
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
          let text='';
          for (let i in this.settings) {
            let ing = this.recipe.jsonStructure.ings[this.settings[i]];
            text += ing.n+' - '+(ing.c?ing.c:'')+' '+(ing.t?ing.t:'') + '\n';
          }
          text+='\n'+this.recipe.title +' '+this.$store.getters.CORE_HOST+this.$route.path ;
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
            id:"sts",
            hash: 'how-to',
            title: 'Як приготувати',
            list: true
          },
          {
            id:"v",
            hash: 'video',
            title: 'Відео рецепт',

          },
          {
            id:"tps",
            hash: 'tips',
            title: 'Поради',
            list: true
          },
          {
            id:"author",
            hash: 'author',
            title: 'Автор',
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

     /*setOffsets () {
        const offsets = []
        const toc = this.menu.slice().reverse()
        for (const item of toc) {
          const section = document.getElementById(item.hash)
          if (!section) continue
          offsets.push(section.offsetTop -200)
        }
        this.offsets = offsets
      },*/
    /*  async findActiveIndex () {
        const currentOffset = (
          window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        )

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
        if (hash === this.$route.hash) return
        this.scrolling = true

        this.tab = hash;

        this.scrolling = false
      }, */


      /**
        playCook = 1 active
        playCook = 2 done
      */
      async playStart(i) {

          if (this.playCook[i]) {
            this.playCook[i]++;
          }
          this.playCook.push(1);
          if (this.playCook.length ==   (this.recipe.jsonStructure.sts.length+1)) {
            this.playFinish = true;
          }

      },

      devideProgres(i) {

          var number = this.recipe.jsonStructure.sts.length;
          return Math.round(i/number*100);
      }


  }

}
</script>
