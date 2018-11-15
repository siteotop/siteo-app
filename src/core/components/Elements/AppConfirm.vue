<template>

  <v-dialog v-model="showDialog"  max-width="340" >
     <v-card>
       <v-card-title class="headline">{{title}}</v-card-title>
       <v-card-text>{{description}}</v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="green darken-1" flat="flat" @click="cancel()">Cancel</v-btn>
         <v-btn color="green darken-1" flat="flat" @click="confirm()">Ok</v-btn>
       </v-card-actions>
     </v-card>
    </v-dialog>

</template>

<script>

export default {



  props: {
      title: {
          type: String,
          default: '',
      },

      description: {
          type: String,
          default: '',
      },

      dialog: {
        type: Boolean,
        default: false
      },

      func: {
        type: Function

      }


  },

  data() {
     return  {
       showDialog: this.dialog
     }

  },

  watch: {
      showDialog(newValue) {
            if (!newValue) {
                  this.$emit('hideDialog');
            }
      }

  },


  methods: {

      confirm() {
          this.$emit('hideDialog');
          this.func();
      },

      cancel() {
          this.showDialog=false;
      }


  }






}

</script>
