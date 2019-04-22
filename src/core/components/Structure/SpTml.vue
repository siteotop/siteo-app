<template functional>
<v-timeline
  v-bind="{
      dense: parent.$root.mobile? true: props.cnf.d,
      alignTop: props.cnf.at,
    }"
  >
  <v-timeline-item
    v-for="(element, i) in props.chldrn||[]"
    :key="i"
    v-bind="element._p"
  >
    <StChildrenHelper
      v-for="(chld, y) in element._ch||[]"
      :key="y"
      :element="chld"
     >
    </StChildrenHelper>
  </v-timeline-item>
</v-timeline>
</template>
<script>

export default {

}
</script>
