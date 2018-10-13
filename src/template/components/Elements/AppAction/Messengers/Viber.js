import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  service: 'viber',
  name: 'AppActionViber',
  computed: {

      hrefService() {
         return 'viber://chat?number=' + this.serviceId
      }

  }

}
