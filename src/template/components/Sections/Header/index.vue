<template functional>
<v-container fluid  dark tag="section" class="primary text--secondary">
    <v-container fill-height class=" ">
      <v-layout
      column
      align-center



      >
        <h1 class="mb-2 display-1 text-xs-left">Parallax Template</h1>
        <div class="subheading mb-3 text-xs-center ">Powered by Vuetify

             </div>
         <transition name="fade" appear>
          <v-btn
          color="accent"
          large

          href="/pre-made-themes"
        >
          Get Started
        </v-btn>
        </transition>
      </v-layout>
    </v-container>
</v-container>

</template>

<script>


  export default {

      name: 'section-header',

      props: {
        messages: {
          default: function() {
            return  [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify.js!',
          excerpt: 'Thank you for joining our community...'
        },
        {
          color: 'red',
          icon: 'people',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter'
        },
        {
          color: 'teal',
          icon: 'local_offer',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today'
        }
      ]
          }
        }
      }

  }
</script>
