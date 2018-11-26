

import Loader from '../../_mixins/component-loading.js';
export default {

  mixins: [ Loader],

  props: {
      objectId: {
        type: String,
        default: '',
      }



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
  },


  created() {

      this.fetchDataFromApi();
  },

  watch: {

      objectId(newValue, OldValue) {
        console.log('change objectId');
        this.onLeave();
        this.fetchDataFromApi();
      }

  },


  beforeRouteLeave(to, from, next) {
      console.log('leave');
       this.onLeave();
       next();
  },

  methods: {

    onLeave() {
      this.error = false;
      this.$store.commit(this.$options.storeName+'/clearModel');

    },


    preFetch(){
      return false;
    },

    fetchDataFromApi() {

      if (this.preFetch()) {
        return;
      }
        
      var self = this;
      this.startLoading();
      this.$store.dispatch(this.$options.storeName+'/searchObjectInItems', this.objectId )
      .then(function (response) {
            console.log(response);
            self.stopLoading();

      }).catch(function(error) {
          console.log(error.response);
          self.error= error.response.status;
          self.stopLoading();
      });
    }


  },



}
