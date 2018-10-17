<template >
  <v-toolbar  v-bind="tProps"  :class="tClass" :style="tStyle">
      <v-btn outline ><AppIcon name="si-dots-menu"></AppIcon> Menu </v-btn>
      <v-spacer></v-spacer>

        <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
            <v-btn icon @click="$vuetify.goTo(0)"><AppIcon name="si-home"></AppIcon></v-btn>
            <v-btn v-for="(item, i) in items" :key="i"
              :href="item.href"
              v-on:click.prevent="$vuetify.goTo(item.href, { offset: -100})"
              exact flat
            >{{item.title}}</v-btn>
        </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('shareWindow')"><AppIcon name="si-share"  ></AppIcon> </v-btn>
      <v-btn icon><AppIcon name="si-qa"></AppIcon> </v-btn>
      <v-btn icon><AppIcon name="si-bookmark"></AppIcon> </v-btn>

  </v-toolbar>
</template>

<script>

export default {
    props: {
      items: {
        type: Array,

      },

      offset: {
        type: Number

      }

    },

  computed: {

        // when offset on
        offsetOn() {
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

    }



}
</script>
