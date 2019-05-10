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
           <v-btn    icon   @click="shareWindow = false"><AppIcon name="si-close"></AppIcon></v-btn>
         </v-card-title>

         <v-card-text>
           <v-text-field id="shareElementInputLink"   outline :value="canonicalUrl" readonly>
             <template v-slot:append>
               <v-btn :icon="$vuetify.breakpoint.xs"   @click="copyText()" >
                 <AppIcon name="si-copy"></AppIcon>
                  <span v-if="!$vuetify.breakpoint.xs">{{$t('copy')}}</span>
               </v-btn>
            </template>


           </v-text-field>

          <v-divider></v-divider>
            <AppSharing
              :cannonical="canonicalUrl"
              :ogTitle="ogTitle"

            >
            </AppSharing>
         </v-card-text>

         <v-divider></v-divider>
         <v-spacer></v-spacer>

         <v-card-actions>
           <v-spacer></v-spacer>
           <v-btn
             color="primary"
             text @click="shareWindow = false"
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
        text
        @click="snackbar = false"
      >
        {{$t('close')}}
      </v-btn>
</v-snackbar>
</div>

</template>

<script>

import AppSharing from './Share/index.vue';
import  _find  from 'lodash/find';

export default {

  components: {AppSharing},

  data() {
      return {
        snackbar: false,
        shareWindow: true,
        ogTitle: this.$parent.$metaInfo.title
      }
  },


  computed: {
    canonicalUrl () {


      var link =_find(this.$parent.$metaInfo.link, function(o) { return o['rel'] == 'canonical'; })
       return  link.href;
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
