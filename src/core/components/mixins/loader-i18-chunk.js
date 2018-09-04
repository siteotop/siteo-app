
export default {

  props: {
      // key for vue-i18
      i18nkey: {
        type: String,
        default: ''
      },

      needUpdateMeta: {
          type:Boolean,
          default: true,
      },

      needToolbar: {
        type: Boolean,
        default: true
      }


  },


  computed: {
    iconTitle() {
       return '';
       /*  if (this.$store.state.Routes[this.$options.name]) {
          return   this.$store.state.Routes[this.$options.name].i;
        } else {
          return false;
        }
        */

    }

  },



  metaInfo () {

    if (!this.needUpdateMeta) {
       return {};
    }

    return {
      title: this.$i18n_t('title'),
      titleTemplate: '%s  - ' + this.$store.state.appInstance.data.name,
      meta: [
        {name: 'description', vmid: 'description', content:  this.$i18n_t('description')}
      ]

    }
  },


  methods: {
    /**
      wrapper for vue-i18n and using component key this.i18nkey
      @return transllate
    */
    $i18n_t(key) {
      return this.$t(this.i18nkey+'.'+key)
    },

    /**
      check exist key
      wrapper for vue-i18n and using component key this.i18nkey
      @return Boolean
    */
    $i18n_te(key) {
      var fullkey = this.i18nkey+'.'+key;
      return this.$te(fullkey);
    },

    /**
        @return translation or translation with default key
    */
    $i18n_td(key, default_key) {
        if (this.$i18n_te(key)) {
            return this.$i18n_t(key)
        } else {
              return this.$t(default_key)
        }
    }

  }





}
