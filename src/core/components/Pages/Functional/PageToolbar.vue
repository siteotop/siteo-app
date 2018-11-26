<template >
  <v-toolbar  v-scroll="onScroll" v-bind="tProps"  :class="tClass" :style="tStyle">
      <v-menu offset-y>
      <v-btn slot="activator" outline ><AppIcon name="si-dots-menu"></AppIcon> {{$t('m')}} </v-btn>
      <v-list>
        <v-list-tile
           tag="li"
           v-for="(item, index) in pageMenu"
           :key="index"
           :href="item.href"
           v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
        >
          <v-list-tile-title>{{ item._ti }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
      <v-spacer></v-spacer>
        <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn icon @click="$vuetify.goTo(0)"><AppIcon name="si-home"></AppIcon></v-btn>
            <v-btn v-for="(item, i) in pageMenu" :key="i"
              :title="item._ti"
              :href="item.href"
              v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
              exact flat
            >{{item.title}}</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn v-if="sharing" icon @click="$emit('shareWindow')"><AppIcon name="si-share"  ></AppIcon> </v-btn>
      <v-btn icon><AppIcon name="si-qa"></AppIcon> </v-btn>
      <v-btn icon><AppIcon name="si-bookmark"></AppIcon> </v-btn>

  </v-toolbar>
</template>

<script>
import PageScroll from './_extends/PageScroll';
export default {
  extends: PageScroll,
  props: {
    hightUp: {
      type: Number,
      default: 300
    },
    sharing: {
      type: Boolean,
      default: false
    },
    contentStructure: {
      type: [Array, Boolean]
    }


  },

  computed: {

        pageMenu() {
          var page_menu = [];
          this.contentStructure.map(function(section) {

              if (section._props&&section._props._n&&section._props._$) {
                  page_menu.push( {title: section._props._n||section._props._ti, _ti: section._props._ti||section._props._n, href: '#'+section._props._$  });
              }

          })
          return page_menu;
        },
        // when offset on
        offsetOn() {
          return  (this.offsetTop>this.hightUp);
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
             //props.app=true;
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

    }



}
</script>
