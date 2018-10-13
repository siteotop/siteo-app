import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  name: 'AppActionViber',
  computed: {

      hrefService() {
         return 'viber://chat?number=' + this.serviceId
      }

  }

}
