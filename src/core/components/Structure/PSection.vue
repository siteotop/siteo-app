<template functional>
<v-container
  fluid
  tag="section"
  :class="props.cnf.b"
>
<template
  v-for="(element, index) in props.chldrn||[]"
 >
   <StChildrenHelper :element="element">
   </StChildrenHelper>
 </template>
</v-container>
</template>

<script>
export default {

}
</script>
