<template functional>
<v-expansion-panel v-bind="{
    inset: props.cnf.i,
    popout: props.cnf.p,
    focusable: props.cnf.f,
    expand: props.cnf.e,
    dark: props.cnf.d,
    light: props.cnf.l
  }" :class="data.class">
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
