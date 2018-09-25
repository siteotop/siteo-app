<template >
  <v-toolbar v-scroll="onScroll" v-bind="tProps"  :class="tClass" :style="tStyle">
      <v-btn v-show="offsetOn" @click="$vuetify.goTo(0, {duration: 40})"  fab small color="primary">
        <AppIcon inverse name="si-arrow-up"></AppIcon>
      </v-btn>
      <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-for="(item, i) in items" :key="i"
              :href="item.href"
              v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
              exact flat
            >{{item.title}}</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>

  </v-toolbar>
</template>

<script>

export default {
    props: {
      items: {
        type: Array,

      }
    },

    data() {
      return {
        offset: 0
      }
    },

    computed: {
        // height of screen
       /*  targetHeight() {
          return this.$vuetify.breakpoint.height||550;
        },
      */
        // when offset on
        offsetOn() {

        //  return  (this.offset>this.targetHeight);
          return  (this.offset>300);
        },


        tProps() {
           var props = {
             dark: true,
             app: false,
             flat: false,
             fixed: false,
            // dense: this.$vuetify.breakpoint.smAndDown
            }
            if (this.offsetOn) {
             //  props.app =true;
             props.fixed =true;
            } else {
              props.flat =true;
              //props.absolute =false;

            }

            return props;
        },
        tStyle() {
            if (this.offsetOn) {
                return {};
            } else {

              return  {
                 'margin-bottom': '-64px',
                 'z-index':1
              }
            }
        },
        tClass() {
            if (this.offsetOn) {
                return 'secondary'
            } else {
                return 'transparent'
            }
        },

    },

    methods: {
      onScroll() {
        this.offset = window.pageYOffset || document.documentElement.scrollTop;

      }
    }

}
</script>
