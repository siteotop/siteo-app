<template >
<div>
  <v-dialog
       :value="shareWindow"
       @update:returnValue="(e)=>{shareWindow=e}"
       width="500"
       :fullscreen="$vuetify.breakpoint.xs"

     >
       <v-card>

         <v-card-title
           class="headline grey lighten-2"
           primary-title
         >
          <AppIcon name="si-share"></AppIcon>
            {{$t('share')}}
          <v-spacer></v-spacer>
           <v-btn   icon   @click="shareWindow = false"><AppIcon name="si-close"></AppIcon></v-btn>
         </v-card-title>

         <v-card-text>
           <v-text-field id="shareElementInputLink"   outline :value="canonicalUrl" readonly>

             <v-btn :icon="$vuetify.breakpoint.xs"   @click="copyText()" slot="append">
               <AppIcon name="si-copy"></AppIcon>
                <span v-if="!$vuetify.breakpoint.xs">{{$t('copy')}}</span>
             </v-btn>

           </v-text-field>

          <v-divider></v-divider>
            <AppActionShare
              :cannonical="canonicalUrl"
              :ogTitle="ogTitle"
            
            >
            </AppActionShare>
         </v-card-text>

         <v-divider></v-divider>
         <v-spacer></v-spacer>

         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn
             color="primary"
             flat
             @click="shareWindow = false"
           >
             {{$t('close')}}
           </v-btn>
         </v-card-actions>
       </v-card>

     </v-dialog>
     <v-snackbar
        v-model="snackbar"

        color="info"
        >
        Link Copied
      <v-btn
        dark
        flat
        @click="snackbar = false"
      >
        {{$t('close')}}
      </v-btn>
</v-snackbar>
</div>

</template>

<script>

export default {
  props:{
    canonicalUrl: {
      type: String
    },

    ogTitle: {
      type: String
    }
  },


  data() {
      return {
        snackbar: false,
        shareWindow: true
      }
  },

  methods: {
    copyText() {
        /* Get the text field */
        var copyText = document.getElementById("shareElementInputLink");
        /* Select the text field */
        copyText.select();
        /* Copy the text inside the text field */
        document.execCommand("copy");
        /* Alert the copied text */
        this.snackbar = true;

    }

  },

  watch: {
    shareWindow(newValue) {
        if (!newValue) {
          this.$emit('closeShare');
        }
    }
  }

}
</script>
