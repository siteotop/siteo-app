


export default {
  functional: true,
  props: {

      color: {
        type: String,
        default: 'grey'
      },

      hrefService:{
        type: String,
        default: ''
      },

      icon: {
        type: String,
        default: 'chat'
      }
  },

  render(h, context) {



    //var self  = this;
    return h('AppAction', {
        props: {
          color: context.props.color,
          ripple: true,
          fab: true,
          flat: true,
          outline: true,
          large:  false,
          hideText:true,
          to: '',
          siicon:'si-'+ context.props.icon
        },
        attrs: {
          href: context.props.hrefService,
          target:"_blank"
        }

    });

  }
}
