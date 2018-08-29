<template functional >

  <v-app light>
     <v-content>
       <v-container  fluid fill-height>
         <v-layout row  align-center>
           <v-flex xs12>
            <div class="text-xs-center">
               <AppIcon name="siteo" scale="10" ></AppIcon>
              <h1>Input hostname for Website</h1>
              <h2>  {{props.state}} Design is not selected  </h2>
          <v-btn href="https://business.siteo.top/app/project/website/templates" > Sett up your design   </v-btn>
            </div>
          </v-flex>

         </v-layout>
      </v-container>
    </v-content>
  </v-app>


</template>

<script>

export default {
    props: {
      state: {
         type: String,
        // default: '',

      }
    }

}

</script>
