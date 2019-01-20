

import Loader from '../../../../core/components/_mixins/component-loading.js';
import mixinsAsyncdata from '../../_mixins/asyncData';

export default {

  mixins: [Loader, mixinsAsyncdata],


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
      ],
      link: [
      { rel: 'canonical', href: this.canonical },
      ]

    }
  },



  watch: {

      objectId(newValue, OldValue) {
        console.log('change objectId');

      }

  },



  methods: {

    catchError() {
        throw {statusError:this.error };
    },



    /*
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
            if (self.afterFetching) {
              self.afterFetching();
            }

      }).catch(function(error) {
          console.log(error);

          if (error.response) {
              self.error= error.response.status;
          } else {
              self.error = 404
            }
          //
          self.stopLoading();
      });
    }
 */

  },



}
