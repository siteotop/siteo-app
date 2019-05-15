<template functional>
<v-img
 v-bind="{
    aspectRatio: props.cnf.a,
    contain: props.cnf.b,
    width: props.cnf.w,
    height: props.cnf.h,
    gradient: props.cnf.g,
    position: props.cnf.p,
    maxHeight: props.cnf.c,
    maxWidth: props.cnf.d,
    minHeight: props.cnf.e,
    minWidth: props.cnf.f,
    alt: props.cntnt.a,
    lazySrc: props.cntnt.l,
    src: props.cntnt.i,
  }"
 :class="props.cnf.b"
>
<template
  v-for="(element, index) in props.chldrn||[]"
 >
   <StChildrenHelper :element="element">
   </StChildrenHelper>
 </template>
</v-img>
</template>

<script>
export default {


}
</script>
