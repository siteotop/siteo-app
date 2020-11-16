<template >
  <component :is="dialog?'v-dialog': 'v-sheet'"
      v-model="shareWindow"
      :width="width"
      :fullscreen="$vuetify.breakpoint.xs"
     >
       <v-card>

         <v-card-title
           class="text-h5 grey lighten-2"
           primary-title
         >

            <v-icon left>$vuetify.icons.share</v-icon>
            {{$t('share')}}
          <v-spacer></v-spacer>
           <v-btn v-if="dialog"   icon   @click="shareWindow = false">
             <v-icon>$vuetify.icons.close</v-icon>
           </v-btn>
         </v-card-title>

         <v-card-text class="pt-3">
           <v-subheader>
              {{ogTitle}}
           </v-subheader>
           <v-textarea
              id="shareCopyId"
              outlined
              :value="canonicalUrl"
              auto-grow
              rows="1"
              readonly>
             <template v-slot:append>
               <v-btn
                icon
                @click="copyText()"
              >
               <v-icon>{{$options._icons.copy}}</v-icon>
             </v-btn>
            </template>


           </v-textarea>

           <AppSharing
              v-if="share"
              :cannonical="canonicalUrl"
              :ogTitle="ogTitle"

            >
            </AppSharing>
         </v-card-text>



         <v-card-actions v-if="dialog">
           <v-spacer></v-spacer>
           <v-btn
             color="primary"
             text
             @click="shareWindow = false"
           >
             {{$t('close')}}
           </v-btn>
         </v-card-actions>
       </v-card>
       <v-snackbar
          v-model="snackbar"
          color="info"
          bottom
          absolute
          >
          Link Copied
       </v-snackbar>
 </component>
</template>

<script>

import AppSharing from './index.vue';
import  _find  from 'lodash/find';

import {mdiContentCopy} from '@mdi/js';

export default {

  components: {AppSharing},
  props: {
      link: {
          type: String,
          default: ''
       },
      title: {
        type: String,
        default: ''
      },

      dialog: {
        type: Boolean,
        default:true
      },
      share: {
        type: Boolean,
        default: true
      },
      width: {
        type:String,
        default: '500'
      }

  },
  data() {
      return {
        snackbar: false,
        shareWindow: true,

      }
  },

  _icons: {
    copy:mdiContentCopy
  },

  /*mounted() {
    console.log(this.$meta().resume());
  },*/

  computed: {
    canonicalUrl () {
        //console.log(this.$route);
        if (this.link) {
            return this.link;
        } else {
          return window.location.origin + window.location.pathname;
        }

    },
    ogTitle() {
      if (this.title) {
        return this.title;
      }
      var meta = this.$meta().resume();

      if (meta.metaInfo&&meta.metaInfo.title)
        return  meta.metaInfo.title;
      else {
         return '';
      }

    }
  },

  methods: {
    copyText() {
        /* Get the text field */
        var copyText = document.getElementById("shareCopyId");
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
          this.$emit('close');
        }
    }
  }

}
</script>
