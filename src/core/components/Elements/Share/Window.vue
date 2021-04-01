<template >
  <component
      :is="dialog?'v-dialog': 'v-sheet'"
      v-model="shareWindow"
      :width="width"
      :fullscreen="$vuetify.breakpoint.xs"
      >
      <v-textarea
         :style="{position:'absolute',left:'-99999px'}"
         id="shareCopyId"

         :value="copiedText"
         readonly>
      </v-textarea>
       <v-card :style="shareText?{position:'absolute',left:'-99999px'}:{}">

         <v-card-title
           class="text-h5 grey lighten-2"
           primary-title
           v-if="!shareText"
         >

            <v-icon left>$vuetify.icons.share</v-icon>

          <v-spacer></v-spacer>
           <v-btn v-if="dialog"   icon   @click="shareWindow = false">
             <v-icon>$vuetify.icons.close</v-icon>
           </v-btn>
         </v-card-title>

         <v-card-title >

              {{ogTitle}}

         </v-card-title>

         <v-card-text class="pt-3" >

           <v-text-field
             v-if="!shareText"
             outlined
             readonly
            :value="copiedText"
            class="text--secondary"
           >
             <template v-slot:append>

               <v-icon @click="copyText()">{{$options._icons.copy}}</v-icon>

            </template>
           </v-text-field>


           <AppSharing
              v-if="!shareText"
              :copyText="copyText"
              :cannonical="canonicalUrl"
              :ogTitle="ogTitle"

            >
            </AppSharing>
         </v-card-text>
       </v-card>
       <AppSharing
          v-if="shareText"
          :cannonical="canonicalUrl"
          :ogTitle="ogTitle"
          :ogDescription="description"
          :large="false"
          :copyText="copyText"

        >
        </AppSharing>
       <v-snackbar
          v-model="snackbar"
          color="info"
          top
          >
          Copied
       </v-snackbar>
 </component>
</template>

<script>

import AppSharing from './index.vue';

import {mdiContentCopy} from '@mdi/js';

export default {

  components: {AppSharing},
  props: {
      link: {
          type: String,
          default: ''
       },

      description: {
          type:String,
          default: '',
      },

      // share link or share text

      title: {
        type: String,
        default: ''
      },

      dialog: {
        type: Boolean,
        default:true
      },

      shareText: {
        type: Boolean,
        default: false
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

    /**
      if mode share text we take copy text
    */
    copiedText() {
       if (this.shareText) {
         return this.description+" "+this.canonicalUrl;
       } else {
         return this.canonicalUrl
       }

    },

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
