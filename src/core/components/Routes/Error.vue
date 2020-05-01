<template>
<v-container class="fill-height ">
<v-row align="center" justify="center">
    <v-col cols="12" sm="10" md="8" class="text-center">
      <v-sheet class="transparent">
        <v-avatar size="90" color="primary">
        <!--  <img
            src="/core/android-chrome-192x192.png"
         alt="Logo"
         >
       -->
        </v-avatar>
        <div class="font-weight-black pb-2" style="font-size:180px;">
          {{code}}
        </div>
        <div class="mt-n6 title">
          {{description}}
        </div>
        <div>
          <span class="caption grey--text text--lighten-1">{{ $t('for_more')}}  <a class="caption grey--text text--lighten-1"  @click="modalError=true" >{{ $t('here')}}</a></span>
          <v-dialog max-width="500" v-model="modalError">
            <v-card >
              <v-card-text>
              <code>{{JSON.stringify($store.state.srvPageErr, null, 1)}}</code>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div class="mt-4">
          <v-btn  v-bind="buttonProps"><v-icon>$vuetify.icons.home</v-icon>{{buttonText}}</v-btn>
          </div>
      </v-sheet>

    </v-col>
</v-row>
</v-container>

</template>

<script>

export default {

  props : {
      status: {
        type: [Number, Object],
        default: 404
      },

      // when component using for route error not found
      fromRoute: {
        type: [Boolean],
        default: false
      }
  },

  data() {
      return {
        dataStatus: false,
        modalError: false
      }
  },

  created() {
      // everytime take status from props
      this.dataStatus = this.status;
      if (this.fromRoute) {
        // need operator "if" when websites is disabled and others path update original server response
        if (!this.$store.state.srvPageErr ) {
          this.$store.commit('setSrvPageErr', {status: 404, error_description: 'Document not found'});
        }
      }
  },
  computed: {

      buttonProps() {
        var button = {
            color: 'primary',
            exact: true
        }
        if (this.$store.getters['appInstance/activeId']) {
          button.to = {path:'/'};
        } else {
          button.href="https://"+ this.$store.getters.getSiteoConfig('host');
        }
        return button;
      },

      description() {
         if (this.$store.state.srvPageErr) {
            if (this.$store.state.srvPageErr.response_data_api ) {
                return this.$store.state.srvPageErr.response_data_api.error_description;
            } else {
                return this.$store.state.srvPageErr.error_description;
            }

         }  else {
           return  this.$t('error'+this.dataStatus);
         }

      },

      code() {
        // when website is disabled  status take from response
         return this.dataStatus? this.dataStatus:
            this.$store.state.srvPageErr.error_code;
      },

      buttonText() {
         if (this.$store.state.appInstance.objectActive.name){
            return this.$store.state.appInstance.objectActive.name;
         } else {
           return  this.$t('mainpage');
         }
      },



  }


}

</script>
