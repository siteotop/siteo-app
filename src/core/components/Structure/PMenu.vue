<template functional>
<component :is="props.cnf.ti?'v-toolbar-items' : 'div'" :class="data.class" >
  <template v-if="props.cntnt.c">
    <PBt
     v-for="(menu, index) in parent.pageMenu"
     :key="index"
     :cnf="props.cnf" :cntnt="{t: menu.title, hg:  menu.target  }"
     >
    </PBt>
  </template>

  <template v-for="(element, index) in props.chldrn||[]">
      <!--_name in element.n,  _data  in element.d, _class in  element.c  -->
    <PBt v-if="element.n=='MBt'" :cnf="props.cnf" :cntnt="element.d" :class="element.c" >
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
