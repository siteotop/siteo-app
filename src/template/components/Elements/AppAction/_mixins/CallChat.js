export default {

  props: {
      serviceId:{
        type: [String, Number],
        default: ''
      },

      actionType: {
        type: String,
        default: 'call', //chat
      }

  },

  data() {
    return {
      nohover: true
    }
  },

  computed: {
    icon() {
      return this.actionType =='call'? 'si-call': 'si-chat';
    }
  },

  render(h) {
    var self  = this;
    return h('AppAction', {
        props: {
          color: 'grey',
          fab: true,
          flat: this.nohover,
          outline: this.nohover,
          large:  false,
          hideText:true,
          to: '',
          siicon: this.icon
        },
        attrs: {
          href: this.hrefService,
          target:"_blank"
        },
        on: {
          mouseover: function () {
            self.nohover= false;
          },

          mouseout: function () {
            self.nohover= true;
          }
        }
    });

  }
}

/*
tel:+120345678910
whatsapp://send?phone=+120345678910
viber://chat?number=120345678910
tg://resolve?domain=nikname
skype:nikname?chat or  skype:nikname?call
https://www.messenger.com/username
*/
