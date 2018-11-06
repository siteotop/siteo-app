<template>
<v-fab-transition>
  <v-speed-dial
       v-model="fab"
       fixed
       right
       bottom

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
       <AppActionList></AppActionList>
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
