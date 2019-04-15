<template functional>
<v-avatar v-bind="{color: 'primary lighten-2', size: 38}">
    <img v-if="parent.$store.state.appInstance.objectActive.src" :src="parent.$store.state.appInstance.objectActive.src"></img>
    <span v-else>{{parent.$store.state.appInstance.objectActive.name[0]}}</span>
</v-avatar>
</template>

<script>
/**
  Left Menu for websites like in app
*/

export default {

}

</script>
