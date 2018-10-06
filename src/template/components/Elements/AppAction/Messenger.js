import CallChat from './_mixins/CallChat'

export default {

  extends: CallChat,
  name: 'AppActionMessenger',
  computed: {

      hrefService() {
         return 'https://www.messenger.com/' + this.serviceId;
      }

  }

}
