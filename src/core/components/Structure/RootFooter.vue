<template>
<v-footer
  app
  height="auto"
  v-bind="{
      absolute: cnf.a,
      inset: cnf.i,
      color: cnf.c,
      dark: cnf.d,
      light: cnf.l,
      fixed: cnf.f,
      padless: cnf.b,
      tile:cnf.g,
      elevation:cnf.e,
    }"
>
  <StChildrenHelper
     :element="chldrn"
     :list="true">
  </StChildrenHelper>
  <!--  -->
<div v-scroll="onScroll" v-if="front">
 <div >
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
     @close="share=false"
    >
   </ShareWindow>
 </div>

  <AppMessagesBlock
    v-if="$store.getters.errorMessages"
    :messages="$store.state.SystemMessages.messages"
  >
  </AppMessagesBlock>

</div>
</v-footer>
</template>

<script>
/**
  Footer for website
*/
import  RLn from './RootLangs.vue';
export default {
  components: {RLn},
  props: ['cnf', 'chldrn'],

  data() {
    return {
        front: false,
        share: false,
        fab:false,
        scrollActive: false
    }
  },
  mounted() {
    this.front = true;
  },

  methods: {
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
  },


}

</script>
