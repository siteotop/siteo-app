<template functional>
<v-layout :class="props.cnf.lc">
  <template
    v-for="(element, index) in props.chldrn||[]"
   >
    <component
      v-if="element._n!='Flx'"
      :key="index"
      :is="props.cnf.e||'v-flex'"
      :class="props.cnf.fc"
    >
      <StChildrenHelper :element="element">
      </StChildrenHelper>
    </component>

    <component
      v-else
      :is="props.cnf.e||'v-flex'"
      :class="element._c||props.cnf.fc"
    >
      <StChildrenHelper :element="flxchild" v-for="(flxchild, index) in element._ch||[]" >
      </StChildrenHelper>
    </component>
  </template>



  <slot></slot>
</v-layout>
</template>

<script>
export default {

}
</script>
