<template>
  <v-dialog :fullscreen="fscreen" v-model="modalValue" max-width="700">
    <PYv
          v-bind="{
              cntnt: {
                  v: videoId,
                  t: title
                },
              cnf: {
                closable: true,
                closeEvent: closeEmit,
                a: 1
              }
            }"
        >
      </PYv>
      <!-- <iframe
        @load="loaded=true"
        width="100%"
        height="100%"
        :src="'https://www.youtube.com/embed/'+clearVideoId+'?autoplay=1&listType=user_uploads&rel=0&start='+start"
        frameborder="0"
        allow="autoplay; encrypted-media" allowfullscreen>
      </iframe> -->


  </v-dialog>
</template>

<script>



export default {



  props: {
    videoId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
     return  {
        modalValue: true,

     }

  },

  methods: {

      closeEmit(){
        this.$emit('close-dialog');
      }

  },
  computed: {

      fscreen () {
         if (this.$vuetify.breakpoint.smAndDown) {
           return true;

         } else {
           return false
         }
      }
  },

  watch: {
    modalValue (newValue, oldValue){
        if (newValue!=oldValue&&!newValue) {
          this.closeEmit();
        }
    }
  }
}
</script>
