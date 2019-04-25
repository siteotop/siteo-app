<template>
<v-dialog
  v-model="dialog"
  v-bind="{
      dark: cnf.d,
      light: cnf.l,
      fullWidth: cnf.fw,
      fullscreen: cnf.fs,
      hideOverlay: cnf.ho,
      lazy: cnf.lz,
      maxWidth:cnf.mw,
      origin: cnf.o,
      persistent: cnf.p,
      scrollable: cnf.sc,
      transition: cnf.tr,
      width: cnf.w,
    }"
>

<template v-if="chldrn.length" #activator="{ on }">
  <StAction v-if="chldrn[0]._n=='StAction'"  v-on="on" v-bind="{cntnt:chldrn[0]._d, cnf: chldrn[0]._p }">
  </StAction>
 </template>

 <template v-if="chldrn.length&&chldrn[1]" #default>
   <StChildrenHelper v-if="chldrn[1]._n=='SpCrd'" :element="chldrn[1]">
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
