<template functional>
<StChildrenHelper :element="{
     n/*_name*/ : 'PAv',
    _p: {
       t:props.cnf.t,
       s: props.cnf.s||'38',
       c:props.cnf.c || 'primary lighten-2'
      },
    d/*_data*/: {
      p: parent.$store.state.appInstance.objectActive.src,
      pt: parent.$store.state.appInstance.objectActive.name,
      t: parent.$store.state.appInstance.objectActive.name[0]
     }
  }"></StChildrenHelper>
</template>

<script>
/**
  Left Menu for websites like in app
*/


export default {

}

</script>
