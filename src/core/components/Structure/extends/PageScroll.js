
/**
  Mixin for scrolling element
*/
export default {

  props: ['cnf', 'cntnt', 'chldrn'],

  data() {
    return {
      showedOnMount: false,
      offsetTop: 0
    }
  },

  mounted() {
    this.showedOnMount = true;
  },

  computed: {
      needShowAction() {
        return this.offsetTop> (this.cnf.e||'250');
      }
  },

  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    },
  }

}
