import CallChat from './_mixins/CallChat'

export default {

  extends: CallChat,
  name: 'AppActionEmail',
  computed: {

      hrefService() {
         return 'mailto:' + this.serviceId
      }

  }

}
