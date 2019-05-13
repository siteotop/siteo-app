<template functional>
<v-expansion-panels v-bind="{
    accordion: props.cnf.a,
    inset: props.cnf.i,
    popout: props.cnf.p,
    focusable: props.cnf.f,
    dark: props.cnf.d,
    light: props.cnf.l,
    multiple: props.cnf.m
  }" :class="data.class">
  <v-expansion-panel
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
   >
    <v-expansion-panel-header >{{element._d? element._d.t:'[title]'}}</v-expansion-panel-header>

    <v-expansion-panel-content>
      <PLt v-if="element._ch" v-bind="{cnf: element._p||{}, chldrn:element._ch}">
      </PLt>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
</template>
<script>
export default {

}
</script>
