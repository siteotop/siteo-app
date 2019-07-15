<template functional>
<v-layout :class="props.cnf.lc">
  <template
    v-for="(element, index) in props.chldrn||[]"
   >
    <!--_name-->
    <component
      v-if="element.n!='Flx'"
      :is="props.cnf.ft||'v-flex'"
      :class="props.cnf.fc"
    >
      <StChildrenHelper :element="element">
      </StChildrenHelper>
    </component>
    <!--_props  in element.p-->
    <component
      v-else
      :is="props.cnf.ft||'v-flex'"
      :class="(element.p? element.p.fc:false)||props.cnf.fc"
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
