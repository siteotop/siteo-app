<template >
  <v-toolbar  v-scroll="onScroll" v-bind="tProps"  :class="tClass" :style="tStyle">
      <v-app-bar-nav-icon v-if="needShowAction" @click="$store.state.drawer=!$store.state.drawer" ></v-app-bar-nav-icon>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" outline ><AppIcon name="si-dots-menu"></AppIcon> {{$t('m')}} </v-btn>
      </template>
      <v-list>

        <v-list-item v-if="needShowAction" tag="li" @click="$vuetify.goTo(0)"
        ><v-list-item-title>Top</v-list-item-title></v-list-item>
        <v-list-item
           tag="li"
           v-for="(item, index) in pageMenu"
           :key="index"
           :href="item.href"
           v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
        >
          <v-list-item-title>{{ item._ti }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-spacer></v-spacer>
        <v-toolbar-items v-if="mdAndUp">

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

    sharing: {
      type: Boolean,
      default: false
    },

    contentStructure: {
      type: [Array, Boolean]
    }


  },

  data() {
    return {
      mdAndUp: false
    }
  },

  mounted() {
      this.mdAndUp = this.$vuetify.breakpoint.mdAndUp;
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



        tProps() {
           var props = {
             dark: true,
             flat: false,
             fixed: false,
            // dense: this.$vuetify.breakpoint.smAndDown
            }
            if (this.needShowAction) {
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
            if (this.needShowAction) {
                return {};
            } else {

              return  {
                 'margin-bottom': '-64px',
                 'z-index':1
              }
            }
        },
        tClass() {
            if (this.needShowAction) {
                return 'secondary'
            } else {
                return 'transparent'
            }
        },

    }



}
</script>
