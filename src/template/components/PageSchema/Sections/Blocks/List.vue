<template functional>
 <v-card class="transparent">
    <v-list subheader>
         <v-subheader>{{props._ti}}</v-subheader>
         <v-list-tile
           v-for="(item, i) in props._li"
           :key="i"
           avatar
           tag="li"
           @click=""
         >
           <v-list-tile-avatar>
              {{(i+1)}}
           </v-list-tile-avatar>

           <v-list-tile-content>
             <v-list-tile-title >{{item._t}}</v-list-tile-title>
             <v-list-tile-sub-title>{{item._d}}</v-list-tile-sub-title>
           </v-list-tile-content>

           <v-list-tile-action>
             <v-checkbox color="primary" value="1"></v-checkbox>
           </v-list-tile-action>
         </v-list-tile>
       </v-list>
</v-card>
</template>

<script>
  export default {
    props: {
      // text
      _li: {
        type: Array,
        default: function() {
          return [];
        },
      }



    },

  }
</script>
