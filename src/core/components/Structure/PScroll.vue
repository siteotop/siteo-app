<template>
<div v-if="showedOnMount" v-scroll="onScroll" :style="returnStyle" >
  <v-scroll-y-transition>
    <template v-if="needShowAction">
      <StChildrenHelper
         :element="chldrn"
         :list="true">
      </StChildrenHelper>
    </template>
  </v-scroll-y-transition>
</div>
<span v-else>
</span>

</template>

<script>

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
      returnStyle() {
        let s = {};
        if (this.cnf.b) s.position ='fixed';
        if (this.cnf.c) s.right ='5px';
        if (this.cnf.d) s.left ='5px';
        if (this.cnf.e) s.top ='5px';
        if (this.cnf.f) s.bottom ='5px';
        if (this.cnf.g) s.zIndex =this.cnf.g;
        return s;
      },

      needShowAction() {
        return this.offsetTop> (this.cnf.a||150);
      }
  },

  methods: {
      onScroll(e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;

      },
  }

}

</script>
