<template>
  <v-card >
    <v-toolbar flat>
      <v-avatar size="42" color="grey"> s </v-avatar>
      <v-toolbar-title class="ml-1 mr-1">Name of Project </v-toolbar-title>
      <v-icon size="20">$vuetify.icons.ac_verified</v-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-img
      max-height="300"
      aspect-ratio="1.6"
      src="https://picsum.photos/600/300?random"
      gradient="to bottom, rgba(0,0,0,.7), rgba(0,0,0,.5)"
      >
       <v-container fill-height>
         <v-layout fill-height align-center justify-center column>
            <div class=" white--text subtitle-1 font-weight-medium pb-3">
               Call to action for card The typography of an application is just as important as its functionality.
            </div>
            <div>
              <v-btn color="pink" dark>
                <v-icon >$vuetify.icons.share</v-icon> Action name
              </v-btn>
            </div>
         </v-layout>
       </v-container>
     </v-img>
     <v-card-actions class="grey lighten-3">
       <v-btn icon color="pink" dark>
         <v-icon >$vuetify.icons.share</v-icon>
       </v-btn>
       <v-btn icon color="pink" dark>
         <v-icon >$vuetify.icons.share</v-icon>
       </v-btn>
       <v-btn icon color="pink" dark>
         <v-icon >$vuetify.icons.close</v-icon>
       </v-btn>
       <v-btn icon color="pink" dark>
         <v-icon >$vuetify.icons.ac_bell</v-icon>
       </v-btn>

     </v-card-actions>
    <v-card-text>
      <v-subheader>
        About project
      </v-subheader>
        smdhgf lasgdfjhgasdjhf gjhasdgf hasdfjg asjgdfkjg ashjdgf gjhasdgfasdf kjgdsfjasd
        asjdhgf kjasgfd kjgajsdhfg jhgasdfg kjasgf djhasdgf jgasdjfk gjhasdgf jgasjhdfgkhasgf gasdf
        sadmfhg ashdgf kjhasgdf jhgsadfjk gjashdgf jhgasjdgfjhsadgf jhasdgfj gsadjfgasjdkfjasd
    </v-card-text>
    <v-card-actions class="grey lighten-3">
      <v-btn block color="pink" dark>
        <v-icon >$vuetify.icons.share</v-icon> Open App

      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default  {
    props: {
       projectId: {
         type: String,
         default: ''
       }

    },

    data() {
      return {
         loaded: false
      }
    },

    created() {
       //console.log(this.projectId);
       this.getProject(this.projectId);
    },

    watch: {
        projectId(newId, oldId) {
            if (newId&&newId!=oldId) {
                this.getProject(newId);
            }
        }
    },

    methods: {
      getProject(id) {
          this.$store.dispatch('_projectCard/getObject', id);
      }
    }
}
</script>
