<template>
  <v-toolbar flat v-scroll="onScroll" v-bind="tProps" >
    <slot></slot>
  </v-toolbar>
</template>
<script>
import PageScroll from '../../Pages/Functional/_extends/PageScroll';
export default {

  extends: PageScroll,


  computed: {

    tProps() {
       var props = {

         app: false,
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


  }

}
</script>
