<template functional>
<v-footer
  app
  height="auto"
  v-bind="{
      absolute: props.cnf.a,
      inset: props.cnf.i,
      color: props.cnf.c,
      dark: props.cnf.d,
      light: props.cnf.l,
      fixed: props.cnf.f,
      padless: props.cnf.b,
      tile:props.cnf.g,
      elevation:props.cnf.e,
    }"
>

<template
  v-for="(elmt, index) in props.chldrn||[]"
 >
   <StChildrenHelper :element="elmt">
   </StChildrenHelper>
</template>
  <!--  -->
   <v-footer color="black" elevation="12" v-if="parent.cookiePolicy" fixed >
     <v-sheet max-width="900px" class="text-center transparent pt-3 mx-auto">

         <noindex v-pre>
           <div>
             We use cookies to ensure that we give you the best experience on our website. By closing this message, you consent to our cookies on this device in accordance with our cookie policy unless you have disabled them.
          </div>
        </noindex>
         <v-btn
           class="my-6"
           depressed
           color="error"
           @click="parent.cookieStop"
         >Accept</v-btn>

     </v-sheet>

   </v-footer>
</v-footer>
</template>

<script>
/**
  Footer for website
*/

export default {

}

</script>
