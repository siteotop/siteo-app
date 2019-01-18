import CorePage from './_extends/page.js';
import { mapState } from 'vuex'

export default {
  extends: CorePage,
  storeName: 'APP_SERVICES',

  computed: {
    ...mapState({
       objectService: function (state) {
         return this.$store.state.APP_SERVICES.objectActive;
       }
    }),
    meta_title() {
       return this.$t('routes.objectService.title', this.objectService );
    },

    meta_description() {
      return this.$t('routes.objectService.description', this.objectService );
    },

    canonical() {
      return this.$store.getters.CORE_HOST + '/p/'+ this.objectService._id;
    }
  },
  methods: {

    afterFetching() {
      console.log(this.$store.state);
      this.$store.state.APP_ORDER.services = [this.objectService._id];


    }

  },

  beforeRouteLeave(to, from, next) {
    this.$store.state.APP_ORDER.services = [];
    next();
  },

  render (h){
      if (this.error) {
        this.catchError();
      }
      return h('OneService', {props: {objectService: this.objectService, shareWindow: this.shareWindow}})

  }

}
