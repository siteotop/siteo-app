<template>
  <v-container >
    <v-layout justify-center>
          <v-flex d-flex  >
            <v-card flat class="text-xs-center">
                <v-card-text primary-title class=" error--text">
                      <p :class="$vuetify.breakpoint.xs? 'display-1': 'display-3'"> {{title}} </p>
                </v-card-text>
                <v-card-text class="body-1 grey--text">
                    {{description}}
                </v-card-text>
                <v-card-actions >
                   <v-spacer></v-spacer>
                    <v-btn  color="orange">Share</v-btn>
                   <v-spacer></v-spacer>
                </v-card-actions>
           </v-card>
        </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

export default {

  props : {
      status: [Number, Object]
  },

  computed: {

      // this code described in lang file
      isTitle() {
        if ( typeof (this.status) =='object')  {
            return false;
        }  else {
          return true;
        }

      },

      title () {

          if (this.isTitle) {
              return  this.$t('page'+this.status+'.title')
          } else {
            return 'Server Error ' + this.status.status;
          }
      },

      description() {
          if (this.isTitle) {
            return this.$t('page'+this.status+'.description');
         } else {
           return this.status.message;
         }
      }

  }


}

</script>
