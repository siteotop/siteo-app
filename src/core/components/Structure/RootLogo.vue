<template functional>
<StChildrenHelper :element="{
    _n : 'SpAvt',
    _p: {
       t:props.cnf.t,
       s: props.cnf.s||'38',
       c:props.cnf.c|| 'primary lighten-2'
      },
    _d: {
      p: parent.$store.state.appInstance.objectActive.src,
      pt: parent.$store.state.appInstance.objectActive.name,
      t: parent.$store.state.appInstance.objectActive.name[0]
     }
  }"></StChildrenHelper>
</template>

<script>
/**
  Left Menu for websites like in app

  <v-avatar v-bind="{color: 'primary lighten-2', size: 38}">
      <img v-if="parent.$store.state.appInstance.objectActive.src" :src="parent.$store.state.appInstance.objectActive.src"></img>
      <span v-else>{{parent.$store.state.appInstance.objectActive.name[0]}}</span>
  </v-avatar>

*/


export default {

}

</script>
