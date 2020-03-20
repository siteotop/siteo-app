<template functional>
<v-responsive
v-bind="{
   aspectRatio: props.cnf.a,
   height: props.cnf.c,
   maxHeight: props.cnf.d,
   maxWidth: props.cnf.l,
   minHeight: props.cnf.h,
   minWidth: props.cnf.b,
   width: props.cnf.e,
}"
:class="data.class"
>

  <template
    v-for="(element, index) in props.chldrn||[]"
   >
     <StChildrenHelper :element="element">
     </StChildrenHelper>
  </template>

</v-responsive>
</template>
<script>
export default {

}
</script>
