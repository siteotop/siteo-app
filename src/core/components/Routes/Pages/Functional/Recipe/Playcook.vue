<template>
<div>
<v-fab-transition >
  <v-card
    color="blue-grey darken-1"
    dark
    class="pa-3"
    id="step-start"
    >
    <h3 class="title">
      Перед приготуванням страви
    </h3>
    <v-card-text>

        Підготуйте всі <a href="#ingredients">інгредієнти</a> для страви та підготуйте основні засоби для приготування:
          <v-chip v-for="(item,i) in  kitchen"
          :key="i"
          small
          >
            {{item}}
          </v-chip>

  </v-card-text>
     <v-card-actions>
       <v-spacer>
       </v-spacer>
       <v-btn
         :disabled="playCook.length?true:false"
         color="primary"
         @click="playStart()"
       >
        Готово
       </v-btn>
     </v-card-actions>
   </v-row>
 </v-card>
</v-fab-transition >
  <template v-for="(step, i) in steps">
    <v-sheet  class="mb-2" v-if="i==3||i==7">
    <v-lazy min-height="300">
      <PAd >
      </PAd>
    </v-lazy>
  </v-sheet>
    <v-card
      :elevation="playCook[i]"
      :class="(playCook[i]==2?'grey--text lighten-2':'') + ' mb-2'"
      hover

    >
      <v-card-title>
        <h4 :id="'step-'+i">{{(i+1)}}.  {{step.t}}</h4>
      </v-card-title>

      <v-card-text class="text-body-1" v-html="step.d" >
      </v-card-text>

      <v-card-actions
      >
        <v-tooltip
          v-if="step.c"
          top
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              class="mx-0"
              color="grey"
              outlined
              v-bind="attrs"
              v-on:click.stop="timeVideo(step.c, step.t)"
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
  <v-divider id="step-last"></v-divider>
  <v-fab-transition >
      <v-card

        v-if="playFinish"
      >
        <v-card-title class="title ">
         ВІТАЄМО І СМАЧНОГО! Так тримати!
        </v-card-title>

        <v-card-text >
             Ми сподіваємось у вас все вийшло! Бажаємо вам приємного настрою та наснаги в нових кулінарних починаннях! Збережіть собі рецепти, щоб не загубити!

        </v-card-text>

    </v-card>

  </v-fab-transition>
  <DialogVideoYoutube
     v-if="tVideo"
   :PYv="{
       v: videoId,
       t: tTitle,
       tc: tVideo
     }"
   @close-dialog="clearVideo()">
  </DialogVideoYoutube>
</div>
</template>


<script>
export default {
  props: ['steps', 'videoId', 'kitchen'],
  data() {
    return  {
      playCook: [],
      playFinish: false,

      tVideo: false, // timecode for video
      tTitle: '' // time title
    }
  },
   mounted() {
      this.goto('#step-start');
   },

   methods: {
    /**
      playCook = 1 active
      playCook = 2 done
    */
    async playStart(i) {

        if (this.playCook[i]) {
          this.playCook[i]++;
        }
        this.playCook.push(1);

        let go = 'start';
        if (i!=undefined) {
         go=i+1;
        }

        if (this.playCook.length ==
        (this.steps.length+1)) {
          this.playFinish = true;
          go = 'last'
        }

        this.goto('#step-'+go);
    },

    goto(id){
      this.$vuetify.goTo(id, {offset: 50, duration: 400});
    },

    devideProgres(i) {

        var number = this.steps.length;
        return Math.round(i/number*100);
    },
    timeVideo(time,title) {
      this.tVideo = time;
      this.tTitle = title;
    },
    clearVideo() {
      this.tVideo=false;
      this.tTitle='';
    }
  }

}
</script>
