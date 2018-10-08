<template >
  <v-list two-line>

          <v-list-tile v-for="(phone, index) in phones"  @click="" :key="index" >
            <v-list-tile-action>
              <v-avatar
                :color="colors[phone.type]?colors[phone.type].color:''"
                class="white--text"
              >
                <AppIcon :name="'si-'+phone.type"></AppIcon>
              </v-avatar>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{phone.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{phone.type}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action  >
                <AppAction fab to="" color="grey" :href="phone.url" target="_bkank" flat siicon="si-openurl" :hideText="true"></AppAction>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>

</template>

<script>
import LinksColors from './AppAction/_helper/links-colors';



export default {


  props: {

      projectLinks: {
          type: [Boolean, Array],
          default: false
      }
  },

  data() {

    return {
      colors: LinksColors,
      phones: this.projectLinks || this.$store.state.APP_INSTANCE.links
    }
  }


}


</script>
