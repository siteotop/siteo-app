<template functional>
<v-tabs
  v-bind="props.cnf"
  :class="data.class"
>
  <v-tab
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    ripple
  >
    {{element._d?element._d.t:''}}
  </v-tab>
  <v-tab-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element._p?{
        transition: element._p.trn,
        reverseTransition: element._p.rtrn
      }:{}"
  >
  <PLt v-if="element._ch" v-bind="{cnf: element._p||{}, chldrn:element._ch}">
  </PLt>
  </v-tab-item>
</v-tabs>
</template>

<script>
export default {

}
</script>
