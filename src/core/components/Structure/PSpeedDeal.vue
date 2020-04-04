<template>
<v-fab-transition>
  <v-speed-dial
       v-model="fab"
       v-bind="{
         absolute: cnf.a,
         fixed: cnf.b,
         direction: cnf.c,
         top: cnf.d,
         bottom: true,
         left: cnf.f,
         right:  cnf.g,
         openOnHover: cnf.h,
         transition: cnf.i,
      }"
     >
       <template v-slot:activator>
         <v-btn
           v-model="fab"
           v-bind="{
              dark: cnf.o,
              light: cnf.j,
              large: cnf.k,
              xLarge: cnf.l,
              color: fab? (cnf.m||'accent')+' darken-3': (cnf.m||'accent'),
              fab: true
             }"
         >
           <v-icon v-if="!fab">{{cnf.n||'$vuetify.icons.action'}}</v-icon>
           <v-icon v-else>$vuetify.icons.close</v-icon>
         </v-btn>
     </template>
        <StChildrenHelper
          v-for="(chld, y) in chldrn"
          :key="y"
          :element="chld"
         >
        </StChildrenHelper>
  </v-speed-dial>
</v-fab-transition>
</template>

<script>
import Vue from 'vue';

Vue.component('VSpeedDial', ()=> import( /* webpackChunkName: "PSd" */ 'vuetify/lib/components/VSpeedDial/VSpeedDial'));

/**
  - зробити  Floating Action Button
	- pulse
	- change icons
*/
export default {
  props: ['cnf', 'cntnt', 'chldrn'],

   data() {
     return {
       fab: false
     }
   }
}
</script>
