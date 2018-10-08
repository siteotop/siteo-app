<template >
  <v-list two-line>

          <v-list-tile v-for="(phone, index) in phones"  @click="" :key="index"  v-if="phone[actionType]">
            <v-list-tile-action>
              <v-avatar
                :color="colors[phone.type].color"
                class="white--text"
              >
                <AppIcon :name="'si-'+phone.type"></AppIcon>
              </v-avatar>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{phone.p_number}}</v-list-tile-title>
              <v-list-tile-sub-title>{{phone.type}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action >
               <component
                 :is="'app-action-'+phone.type"
                 :actionType="actionType"
                 :serviceId="phone.p_number"></component>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>

</template>

<script>
import ChatColors from './AppAction/_helper/chat-colors';
import AppActionPhone from './AppAction/Phone.js';
import AppActionSkype from './AppAction/Skype.js';
import AppActionTelegram from './AppAction/Telegram.js';
import AppActionViber from './AppAction/Viber.js';
import AppActionWhatsapp from './AppAction/Whatsapp.js';
import AppActionMessenger from './AppAction/Messenger.js';
import AppActionEmail from './AppAction/Email.js';


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

      projectPhones: {
          type: [Boolean, Array],
          default: false
      }
  },

  data() {

    return {
      colors: ChatColors,
      phones: this.projectPhones || this.$store.state.APP_INSTANCE.phones
    }
  },

  methods: {
    copyToClipboard() {
        console.log('hover');
    },


  }


}


</script>
