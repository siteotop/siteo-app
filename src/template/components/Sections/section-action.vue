<template>

    <v-parallax src="https://vuetifyjs.com/themes/parallax-starter/assets/section.jpeg" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
        <transition name="bounce" appear>   <em>Kick-start your application today</em> </transition>
        <v-btn
          class="blue lighten-2 mt-5"
          dark
          large
          href="/pre-made-themes"
        >
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>

</template>

<script>

export default {
    props: {

    },

    name: 'section-action'


}

</script>
