
export default {

  props: {

      color: {
        type: String,
        default: 'grey'
      },

      serviceId:{
        type: [String, Number],
        default: ''
      },

      iconNative: {
        type: Boolean,
        default: true
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
      if (this.iconNative) {
        return 'si-'+this.$options.service;
      } else {
        return this.actionType =='call'? 'si-call': 'si-chat';
      }
    }
  },

  render(h) {
    var self  = this;
    return h('AppAction', {
        props: {
          color: this.color,
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
