<template functional>
  <span v-if="!props.discount" :class="data.staticClass">{{props.price}} {{parent.$store.state.appInstance.objectActive.currency}}</span>
  <v-row v-else>
    <v-col cols="12">
      <strike  class="body-1">{{props.price}} {{parent.$store.state.appInstance.objectActive.currency}}</strike>
    </v-col>
    <v-col cols="12" :class="data.staticClass">
      <span v-if="props.discount!='100'">{{Math.ceil(props.price/100*(100-props.discount))}} {{parent.$store.state.appInstance.objectActive.currency}}</span>
      <span v-else class="red--text font-weight-black"> FREE </span>
      <sup>
      <v-chip v-if="props.discount!='100'"  label color="error" text-color="white" class="font-weight-bold">
        -{{props.discount}}%
      </v-chip></sup>
    </v-col>
  </v-row>
</template>

<script>

export default {

  props: {
     price: {
       type: [String, Number, Boolean],
       default: ''
     },

     discount: {
       type: [Number, String, Boolean],
       default: 0
     }

  }


}

</script>
