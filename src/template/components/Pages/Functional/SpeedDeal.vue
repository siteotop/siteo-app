<template>
<v-fab-transition>
  <v-speed-dial
       v-model="fab"
       fixed
       right
       bottom
       transition="slide-y-reverse-transition"
     >
       <v-btn
         slot="activator"
         v-model="fab"
         :color="fab? 'secondary': 'accent'"
         dark
         :large="$vuetify.breakpoint.smAndUp"
         fab
       >
          <AppIcon v-if="!fab" name="si-order"></AppIcon>
          <AppIcon v-if="fab" name="si-close"></AppIcon>

       </v-btn>
       <AutoActions></AutoActions>
     </v-speed-dial>
</v-fab-transition>
</template>

<script>

/**
  - зробити  Floating Action Button
	- pulse
	- change icons
*/
export default {

   data() {
     return {
       fab: false
     }
   }
}
</script>
