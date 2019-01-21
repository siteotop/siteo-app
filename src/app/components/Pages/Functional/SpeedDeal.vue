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
       <v-btn
         slot="activator"
         v-model="fab"
         :color="fab? 'secondary': 'accent'"
         dark
         :large="$root.mobile"
         fab
       >
          <AppIcon v-if="!fab" name="si-order"></AppIcon>
          <AppIcon v-if="fab" name="si-close"></AppIcon>

       </v-btn>
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
