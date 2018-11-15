<template functional>
  <v-bottom-nav

     :value="true"

     color="secondary"
     absolute
     app
     shift

   >
     <v-btn
       color="primary"
       flat
       to="/"
     >
       <span>Home</span>
       <AppIcon name="si-home"></AppIcon>
     </v-btn>

     <v-btn
       color="primary"
       flat
       to="/go/order"
     >
       <span>Order</span>
       <AppIcon name="si-order"></AppIcon>
     </v-btn>

     <v-btn
       color="primary"
       flat
       to="/go/call"
     >
       <span>Call</span>
       <AppIcon name="si-call"></AppIcon>
     </v-btn>

     <v-btn
       color="primary"
       flat
       to="/go/chat"
     >
       <span>Chats</span>
       <AppIcon name="si-chat"></AppIcon>
     </v-btn>

     <v-btn
       color="primary"
       flat
       to="/go/locations"
     >
       <span>Locations</span>
       <AppIcon name="si-locations"></AppIcon>
     </v-btn>


   </v-bottom-nav>

</template>

<script>

export default {

}
</script>
