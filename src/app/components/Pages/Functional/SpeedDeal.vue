<template>
<v-fab-transition>
  <v-speed-dial
       v-scroll="onScroll" v-show="needShowAction"
       v-model="fab"
       fixed
       right
       bottom
       transition="slide-y-reverse-transition"
     >
       <template v-slot:activator="{ on }">
       <v-btn
         v-on="on"
         v-model="fab"
         :color="fab? 'secondary': 'accent'"
         dark
         :large="$root.mobile"
         fab
       >
          <AppIcon v-if="!fab" name="si-order"></AppIcon>
          <AppIcon v-if="fab" name="si-close"></AppIcon>

       </v-btn>
     </template>
       <WiActions></WiActions>
     </v-speed-dial>
</v-fab-transition>
</template>

<script>

/**
  - зробити  Floating Action Button
	- pulse
	- change icons
*/
import PageScroll from './_extends/PageScroll';
export default {
   extends:  PageScroll,
   data() {
     return {
       fab: false
     }
   }
}
</script>
