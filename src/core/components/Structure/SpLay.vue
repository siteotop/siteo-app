<template functional>
<v-layout :class="props.cnf.lc">
  <template
    v-for="(element, index) in props.chldrn||[]"
   >
    <component
      v-if="element._n!='Flx'"
      :is="props.cnf.ft||'v-flex'"
      :class="props.cnf.fc"
    >
      <StChildrenHelper :element="element">
      </StChildrenHelper>
    </component>

    <component
      v-else
      :is="props.cnf.ft||'v-flex'"
      :class="(element._p? element._p.fc:false)||props.cnf.fc"
    >
      <StChildrenHelper :element="flxchild" :key="appx" v-for="(flxchild, appx) in element._ch||[]" >
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
