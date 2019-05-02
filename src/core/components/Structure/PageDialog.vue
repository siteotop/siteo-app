<template>
<v-dialog
  v-model="dialog"
  v-bind="{
      dark: cnf.d,
      light: cnf.l,
      fullWidth: cnf.f,
      fullscreen: cnf.e,
      hideOverlay: cnf.h,
      lazy: cnf.z,
      maxWidth:cnf.m,
      origin: cnf.o,
      persistent: cnf.p,
      scrollable: cnf.s,
      transition: cnf.r,
      width: cnf.w,
    }"
>

<template v-if="chldrn.length" #activator="{ on }">
  <PAc v-if="chldrn[0]._n=='PAc'"  v-on="on" v-bind="{cntnt:chldrn[0]._d, cnf: chldrn[0]._p }">
  </PAc>
 </template>

 <template v-if="chldrn.length&&chldrn[1]" #default>
   <StChildrenHelper v-if="chldrn[1]._n=='PCd'" :element="chldrn[1]">
   </StChildrenHelper>
</template>
</v-dialog>
</template>
<script>
export default {
  props: {
    chldrn: {
      default: function () {
        return [];
      }
    },

    cnf: {
      default: function () {
        return {};
      }
    }
  },

  data() {
    return {
      dialog:false
    }
  }

}

</script>
