
import FunctionalSpeedDeal from '../Functional/SpeedDeal.vue';
import FunctionalShareWindow from '../Functional/ShareWindow.vue';
import FunctionalPageToolbar from '../Functional/PageToolbar.vue';
import FunctionalButtonUp from  '../Functional/ButtonUp.vue';

import Loader from '../../_mixins/component-loading.js';
export default {

  mixins: [ Loader],
  components: {
    FunctionalSpeedDeal,
    FunctionalShareWindow,
    FunctionalPageToolbar,
    FunctionalButtonUp

  },
  data() {
    return  {
      error: false,
      //offsetTop: 0,
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
  }


}
