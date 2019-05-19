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
 >
   <img v-if="props.cntnt.p" :src="props.cntnt.p" :alt="props.cntnt.pt">
   <span v-else class="white--text headline">
     <v-icon v-if="props.cntnt.i">{{props.cntnt.i}}</v-icon>
     <span v-else>{{props.cntnt.t}}</span>
   </span>
</v-avatar>
</template>
<script>
export default {

}
</script>
