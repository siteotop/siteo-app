<template >
  <v-list v-if="vList" two-line>

          <v-list-tile v-for="(contact, index) in services"  @click="" :key="index"  v-if="contact[actionType]">
            <v-list-tile-action>
              <v-avatar
                :color="colors[contact.type].color"
                class="white--text"
              >
                <AppIcon :name="'si-'+contact.type"></AppIcon>
              </v-avatar>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contact.p_number}}</v-list-tile-title>
              <v-list-tile-sub-title>{{contact.type}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action >
               <AppActionCallChat

                 :hrefService="getHrefForService(contact.type, contact.p_number)"
                 :icon="actionType"
                ></AppActionCallChat>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>
  <div v-else>
    <AppActionCallChat v-if="contact[actionType]" v-for="(contact, index) in services"      :key="index"
      :color="colors[contact.type].color"
      :icon="contact.type"
      :hrefService="getHrefForService(contact.type, contact.p_number)"
      ></AppActionCallChat>
  </div>
</template>

<script>
import ChatColors from './AppAction/_helper/messengers';
import AppActionCallChat from './AppAction/CallChat';

export default {
  components: {
    AppActionCallChat,

  },

  props: {
      actionType: {
         type: String,
         default: 'call'
      },

      vList: {
        type: Boolean,
        default: false
      },

      projectPhones: {
          type: [Boolean, Array],
          default: false
      }
  },

  data() {

    return {
      colors: ChatColors,
      services: this.projectPhones || this.$store.state.APP_INSTANCE.contacts
    }
  },

  methods: {
      getHrefForService(type, id) {
          if (this.colors[type]&&this.colors[type].action) {
              return this.colors[type].action(id);
          }  else {
            return '';
          }

      }

  }

}


</script>
