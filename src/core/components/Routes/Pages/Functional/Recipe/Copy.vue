<template>
  <v-bottom-sheet
    v-model="sheet"
    inset
    hide-overlay
    elev
    persistent
    class="elevation-7"
  >
       <v-card tile>
         <v-progress-linear
           :value="devideProgres"
           class="my-0"
           height="5"
         ></v-progress-linear>
         <v-card-title>
            Вибрано {{selected}}/{{counts}} <v-spacer></v-spacer> <v-btn icon @click="emitClose"><v-icon>$vuetify.icons.close</v-icon></v-btn>
         </v-card-title>

         <v-card-text >
           <ShareWindow
             :title="'Скопіювати інгредієнти'"
             :link="fullLink"
             :description="selectedText"
             :appendLink="true"
             :dialog="false"
             :shareText="true"
             :width="'auto'"

            >
           </ShareWindow>
        </v-card-text>
       </v-card>

     </v-bottom-sheet>
</template>

<script>
import VBottomSheet from 'vuetify/lib/components/VBottomSheet';
export default {
  components: {
    VBottomSheet
  },

  props: ['ings', 'settings','counts', 'title'],

  data() {
    return {
      sheet: true,

    }
  },
  methods: {
      emitClose(){
          this.$emit('close')
      }
  },
  computed: {
    devideProgres() {
      return Math.round(this.selected/this.counts*100);
    },
    selected() {
        return this.settings.length;
    },
    /**
      generate text for copied
    */
    fullLink() {
      return this.$store.getters.CORE_HOST+this.$route.path;
    },

    selectedText() {
       if (this.settings.length>0) {
          this.settings.sort();
          let text='Інгредієнти для "'+this.title +'": \n';
          for (let i in this.settings) {
            let ing = this.ings[this.settings[i]];
            text += ing.n+' - '+(ing.c?ing.c:'')+' '+(ing.t?ing.t:'') + '\n';
          }
          text+='\n'+'Кроки приготування за посиланням ';
          return text;
       } else {
         return '';
       }
    },
  }
}
</script>
