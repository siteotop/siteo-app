
import FunctionalSpeedDeal from '../Functional/SpeedDeal.vue';
import FunctionalShareWindow from '../Functional/ShareWindow.vue';
import FunctionalPageToolbar from '../Functional/PageToolbar.vue';

import Loader from '../../_mixins/component-loading.js';
export default {

  mixins: [ Loader],
  components: {
    FunctionalSpeedDeal,
    FunctionalShareWindow,
    FunctionalPageToolbar

  },
  data() {
    return  {
      error: false,
      offsetTop: 0,
      showUpButton: false,
      shareWindow: false
    }
  },



  metaInfo () {

   return {
      title: this.meta_title,
      titleTemplate: '%s  - ' + this.$store.state.APP_INSTANCE.data.name,
      meta: [
        {name: 'description', vmid: 'description', content: this.meta_description }
      ]

    }
  },


  watch: {

      postId(newValue, OldValue) {
        console.log('change postId');
        this.onLeave();
        this.getPageFromServer();
      },

      offsetTop(current, before) {
          this.showUpButton = false;
          if (current>this.$vuetify.breakpoint.height) {
           if (current<before) {
             this.showUpButton = true;
           }
         }
      }

  },





  computed: {
      needShowAction() {
        return this.offsetTop> this.$vuetify.breakpoint.height;
      }


  },

  methods: {
      onScroll(e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      },


  },




}
