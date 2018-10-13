import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  service: 'whatsapp',
  name: 'AppActionWhatsapp',
  computed: {

      hrefService() {
         return 'whatsapp://send?phone=+' + this.serviceId;
      }

  }

}
