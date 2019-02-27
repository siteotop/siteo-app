<template>
  <v-select multiple chips deletableChips :items="[]"  v-bind="vComp" v-model="valueData" ></v-select>
</template>

<script>

import VModelInput from './_mixins/v-model-input';

export default {


  mixins: [VModelInput],

  props: {
    vComp: {
      type: Object
    },

  },

/*
  render(h, context) {

    var items = context.parent.$store.state.APP_SERVICES.items.objects.map(function(element) {
      return {value: element._id, text:element.title+ ' - '+ element.price };
    });

    return h('v-select',  {
      props:  ,
      on:context.listeners,
      attrs: context.data.attrs

     });

  }
*/

}
</script>
