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
   <!-- _data  in element.d-->
    <v-expansion-panel-header >{{element.d? element.d.t:'[title]'}}</v-expansion-panel-header>

    <v-expansion-panel-content>
        <!-- _children in element.h-->
        <StChildrenHelper
           :element="element.h"
           :list="true">
        </StChildrenHelper>
    </v-expansion-panel-content>
  </v-expansion-panel>
</v-expansion-panels>
</template>
<script>


export default {

}
</script>
