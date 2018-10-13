import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  name: 'AppActionPhone',
  computed: {

      hrefService() {
         return 'tel:+' + this.serviceId
      }

  }

}
