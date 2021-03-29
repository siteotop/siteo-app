<template>
  <div v-if="front" id="cookies" v-scroll="onScroll">
    <div
      v-if="cookiePolicy"
      v-scroll="cookieOnScroll"
     >
      <v-footer
         v-if="cookieStatus"
         color="black"
         elevation="12"
         fixed
      >
        <v-sheet
         max-width="900px"
         dark
         class="text-center transparent pt-3 mx-auto"
        >

          <!--googleoff: all-->
               <div>
                {{$t('cookiePolicy')}}
               </div>
         <!--/googleoff: all-->
           </noindex>
            <v-btn
              class="my-6"
              depressed
              color="error"
              @click="cookieStop"
            >{{$t('cookieAct')}}</v-btn>

        </v-sheet>
      </v-footer>
    </div>
    <v-fab-transition>
    <v-btn
      v-show="fab"
      aria-label="Scroll to top"
      title="Scroll to top"
      bottom
      right
      fab
      fixed
      large


      @click="toTop"
    >
      <v-icon>$vuetify.icons.up</v-icon>
    </v-btn>
  </v-fab-transition>
  <v-fab-transition>
  <v-btn
    v-show="fab"
    aria-label="Share"
    title="share"
    left
    bottom
    fab
    fixed
    large


    @click="share=!share"
  >
    <v-icon>$vuetify.icons.share</v-icon>
  </v-btn>
</v-fab-transition>
    <ShareWindow
      v-if="share"
      @close="closeShare"
     >
    </ShareWindow>
     <AppMessagesBlock
       v-if="$store.getters.errorMessages"
       :messages="$store.state.SystemMessages.messages"
     >
     </AppMessagesBlock>

</div>
<div v-else>
</div>
</template>

<script>

export default {
  
    data() {
        return {
           currentOffset: 0,
           front: false,
           cookiePolicy: false,
           cookieStatus: false,
           fab: false,
           share: false,
           value: false
        }
    },
    mounted() {
      this.front = true;
      this.cookieAsk();
    },

    methods: {
      closeShare() {
        console.log('close');
        this.share = false;
      },

      onScroll () {
        if (typeof window === 'undefined') return
        const top = (
          window.pageYOffset ||
          document.documentElement.offsetTop ||
          0
        )
        this.fab = top > 300
      },
      toTop () {
       this.$router.push({ hash: '' })
       this.$vuetify.goTo(0)
     },
      cookieAsk() {
          var re = window.localStorage.getItem('siteo_cookie_policy');
          if (!re) {
             this.cookiePolicy = true;
          }
      },
      cookieStop() {
        this.cookiePolicy = false;
        var re = window.localStorage.setItem('siteo_cookie_policy', true);
      },

      /**
          Cookie show only when human small  scroll  page
      */
      cookieOnScroll(e) {
        this.currentOffset = (
         window.pageYOffset ||
         document.documentElement.offsetTop ||
         0
       );

        if (!this.cookieStatus&&this.currentOffset>100) {
            this.cookieStatus = true
        }

      }
    }

}
</script>
