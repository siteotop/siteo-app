<template functional>
<component :is="props.cnf.ti?'v-toolbar-items' : 'div'" :class="data.class" >
  <template v-if="props.cntnt.c">
    <PBt
     v-for="(menu, index) in parent.$store.getters['pages/menu']"
     :key="index"
     :cnf="props.cnf" :cntnt="{t: menu.title }" >
    </PBt>
  </template>

  <template v-for="(element, index) in props.chldrn||[]">
    <PBt v-if="element._n=='MBt'" :cnf="props.cnf" :cntnt="element._d" :class="element._c" >
    </PBt>
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
