<template>
  <v-dialog :fullscreen="fscreen" v-model="modalValue" max-width="700">
    <PYv
          v-bind="{
              cntnt: PYv,
              cnf: {
                closable: true,
                closeEvent: closeEmit,
                a: 1
              }
            }"
        >
      </PYv>
 </v-dialog>
</template>

<script>



export default {

  props: {
    PYv: {
      type: Object,
      default: ()=>{}
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
