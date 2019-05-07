<template functional>
<component :is="props.cnf.ti?'v-toolbar-items' : 'div'" :class="data.class" >
  <template v-for="(element, index) in props.chldrn||[]">
    <RBt v-if="element._n=='MBt'" :cnf="props.cnf" :cntnt="element._d" :class="element._c" >
    </RBt>
    <StChildrenHelper
      v-else
      :element="element"
     >
    </StChildrenHelper>
  </template>
</component>
</template>
<script>
export default {

}
</script>
