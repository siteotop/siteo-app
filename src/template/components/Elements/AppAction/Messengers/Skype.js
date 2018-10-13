import CallChat from '../_mixins/CallChat'

export default {

  extends: CallChat,
  service: 'skype',
  name: 'AppActionSkype',
  computed: {

      hrefService() {
         return 'skype:'+this.serviceId+'?call';
      }

  }

}
