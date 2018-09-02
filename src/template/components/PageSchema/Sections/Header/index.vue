<template functional>
<v-container fluid  dark tag="section" class="primary text--secondary ">

      <v-layout
      column
      align-center
      >
        <h1 class="mb-2 display-1 text-xs-left">Parallax Template</h1>
        <div class="subheading mb-3 text-xs-center ">Powered by Vuetify
        </div>

         <transition name="fade" appear>
          <AppAction> parent.$t('form.hello') }}</AppAction>
        </transition>
      </v-layout>

</v-container>

</template>

<script>


  export default {
    name: 'section-header',
  }
</script>
