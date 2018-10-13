import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  service: 'phone',
  name: 'AppActionPhone',
  computed: {

      hrefService() {
         return 'tel:+' + this.serviceId
      }

  }

}
