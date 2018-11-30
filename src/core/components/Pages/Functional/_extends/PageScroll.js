
/**
  Mixin for scrolling element
*/
export default {

  props: {
    hightUp: {
      type: Number,
      default: 0
    },
  },


  data() {
    return {
      offsetTop: 0
    }
  },

  computed: {
      needShowAction() {
        return this.offsetTop> (this.hightUp||this.$vuetify.breakpoint.height);
      }
  },

  methods: {
      onScroll(e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      },
  }

}
