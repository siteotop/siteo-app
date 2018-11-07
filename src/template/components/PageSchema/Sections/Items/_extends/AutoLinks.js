
export default {

  props: {
      actionType: {
         type: String,
         default: 'call'
      },


      vList: {
        type: Boolean,
        default: false
      },

      objectsUrls: {
          type: [Boolean, Array],
          default: false
      }
  },

  data() {

    return {

      services: this.objectsUrls || this.$store.state.APP_INSTANCE[this.$options.defaultAPPProperty]
    }
  },

  render (h) {
      return h('BLinks', {
        props: {
          items: this.collectLinks,
          vList: this.vList,
          actionType: this.actionType
      }});

  }
}
