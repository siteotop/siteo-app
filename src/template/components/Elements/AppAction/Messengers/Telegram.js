import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  name: 'AppActionTelegram',
  computed: {

      hrefService() {
         return 'tg://resolve?domain=' + this.serviceId
      }

  }

}
