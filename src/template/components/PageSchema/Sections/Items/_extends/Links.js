
export default {

  props: {
      $vl: {
        type: Boolean,
        default: false
      },

      $clp: { // component list props.  if component has $cl will be use this
          type: Object,
          default: function () {
            return {

          };
        }
      },
  },

  render (h) {
      return h('BLinks', {
        props: {
          items: this.collectLinks,
          $vl: this.$vl,
          $clp: this.$clp
      }});

  }
}
