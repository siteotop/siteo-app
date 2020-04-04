<template functional>
<v-avatar

   v-bind="{
     tile:props.cnf.t,
     size:props.cnf.s,
     color:props.cnf.c,
     width:props.cnf.a,
     height:props.cnf.b,
     left:props.cnf.d,
     right:props.cnf.e
     }"
    :class="data.class"
 >
   <img v-if="props.cntnt.p" :src="props.cntnt.p" :alt="props.cntnt.pt">
   <span v-if="props.cntnt.t">{{props.cntnt.t}}</span>
   <template
       v-for="(element, index) in props.chldrn||[]"
      >
        <StChildrenHelper :element="element">
        </StChildrenHelper>
   </template>

</v-avatar>
</template>
<script>
export default {

}
</script>
