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
     <v-sheet max-width="900px" dark class="text-center transparent pt-3 mx-auto">

       <!--googleoff: all-->
            <div>
             {{parent.$t('cookiePolicy')}}
            </div>
      <!--/googleoff: all-->
        </noindex>
         <v-btn
           class="my-6"
           depressed
           color="error"
           @click="parent.cookieStop"
         >{{parent.$t('cookieAct')}}</v-btn>

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
