<template>
<v-sheet class="mx-auto" max-width="1000px">
  <v-slide-group >


    <template v-for="(link,socialid) in $options.collectLinks">
      <v-slide-item>
        <v-card
          flat
          width="70px"
          class="text-center"
        >

        <v-btn
          :color="$options.colors[socialid]"
          dark
          fab
          large
          elevation="1"
          @click="openSocial(socialid, link.sharer)"

        >
          <v-icon>{{link.i}}</v-icon>

        </v-btn>
        <v-card-text class="text-no-wrap px-0 "> {{socialid}}
        </v-card-text>
      </v-card>
      </v-slide-item>
    </template>
  </v-slide-group>
</v-sheet>
</template>

<script>

import Colors from './colors';
import Sharing from './sharing';

export default {
  colors: Colors,
  collectLinks: Sharing,
  props: {

    /**

    */
    ogTitle: {
      type: String,
      default: ''
    },

    cannonical: {
      type: String,
      default: ''
    },
    ogDescription: {
      type:String,
      default: ''
    },

    /***
      functional
    */
    copyText: {
      type: Function
    },

    large: {
      type: Boolean,
      default: true
    }

  },

    methods: {
      getHrefForService(sharer) {
          return sharer
          .replace(/@url/g, this.cannonical)
          .replace(/@description/g,  this.ogDescription||this.ogTitle)
          //  .replace(/@image/g, this.ogImage)
          //.replace(/@description/g, this.ogDescription);
      },



      openSocial(socialid, sharer) {

            if (sharer =='copy') {
                this.copyText();
            } else {
              var method = 'method_'+socialid;
              let href='';
              if (this[method]) {
                href=this[method](sharer);
              } else {
                href=this.getHrefForService(sharer);
              }

              window.open(encodeURI(href), '_blank');
            }

      }

    }

}


</script>
