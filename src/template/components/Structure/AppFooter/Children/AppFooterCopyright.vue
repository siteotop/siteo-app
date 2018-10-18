<template functional>
  <SectionWrap >
    <v-divider></v-divider>
    <v-container >
     <v-layout  >
        <v-flex text-xs-center  >
          {{parent.$t('copyright', {name: parent.$store.state.APP_INSTANCE.data.name, template: ' siteo-template'})}}  <v-btn target="_blank" flat href="https://siteo.top"><AppIcon  name="si-logo-grey"></AppIcon>siteo.top </v-btn>
         </v-flex>
      </v-layout>
    </v-container>
  </SectionWrap>

</template>

<script>

export default {

}

</script>
