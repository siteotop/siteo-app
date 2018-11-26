

import Loader from '../../_mixins/component-loading.js';
export default {

  mixins: [ Loader],
  
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
