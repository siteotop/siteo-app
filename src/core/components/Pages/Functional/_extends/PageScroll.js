
/**
  Mixin for scrolling element
*/
export default {
  data() {
    return {
      offsetTop: 0
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
  }

}
