<template >
  <v-list v-if="vList" two-line>

          <v-list-tile v-for="(contect, index) in services"  @click="" :key="index"  v-if="contect[actionType]">
            <v-list-tile-action>
              <v-avatar
                :color="colors[contect.type].color"
                class="white--text"
              >
                <AppIcon :name="'si-'+contect.type"></AppIcon>
              </v-avatar>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{contect.p_number}}</v-list-tile-title>
              <v-list-tile-sub-title>{{contect.type}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action >
               <component
                 :is="'app-action-'+contect.type"
                 :actionType="actionType"
                 :iconNative="false"
                 :serviceId="contect.p_number"></component>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>
  <div v-else>
    <component v-for="(contect, index) in services" :key="index"
      :is="'app-action-'+contect.type"
      :color="colors[contect.type].color"
      :actionType="actionType"
      :serviceId="contect.p_number"></component>
  </div>
</template>

<script>
import ChatColors from './AppAction/_helper/chat-colors';
import AppActionPhone from './AppAction/Messengers/Phone.js';
import AppActionSkype from './AppAction/Messengers/Skype.js';
import AppActionTelegram from './AppAction/Messengers/Telegram.js';
import AppActionViber from './AppAction/Messengers/Viber.js';
import AppActionWhatsapp from './AppAction/Messengers/Whatsapp.js';
import AppActionMessenger from './AppAction/Messengers/Messenger.js';
import AppActionEmail from './AppAction/Messengers/Email.js';


export default {
  components: {
    AppActionPhone,
    AppActionSkype,
    AppActionTelegram,
    AppActionViber,
    AppActionWhatsapp,
    AppActionMessenger,
    AppActionEmail
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
  }

}


</script>
