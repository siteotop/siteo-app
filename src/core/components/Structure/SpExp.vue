<template functional>
<v-expansion-panel v-bind="props.cnf" :class="data.class">
  <v-expansion-panel-content
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
   >
    <template v-slot:header>
      <div v-if="element._d">{{element._d.t}}</div>
    </template>
    <PLt v-if="element._ch" v-bind="{cnf: element._p||{}, chldrn:element._ch}">
    </PLt>
  </v-expansion-panel-content>
</v-expansion-panel>
</template>
<script>
export default {

}
</script>
