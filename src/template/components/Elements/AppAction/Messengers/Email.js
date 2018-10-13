import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  service: 'email',
  name: 'AppActionEmail',
  computed: {

      hrefService() {
         return 'mailto:' + this.serviceId
      }

  }

}
