/**
  Button for all actions on Siteo
  Default StAction go to order  /go/order
  when sombody click to action we call  statistic event
*/
export default {
  functional: true,
  render(h, context) {
    if (context.props.href) {
      context.props.cnf.to = '';
    }
    if (!context.props.cntnt){
      context.props.cntnt = {};
    }
    return h('v-btn',
      {
        props: {
          tag: 'a',
          color: 'secondary',
          //to: {name: 'order', params: {typeAction: 'order'} },
          ...context.props.cnf
        },

        on: {
          click: function (event) {
               if (context.listeners&&context.listeners.click) {
                 context.listeners.click(event);
               }
              console.log(' here send statistic');
          }
        }
      },

      [
        h('AppIcon', {attrs: {name:context.props.siicon||'si-order'}}),
        (!context.props.fab)? (context.props.cntnt.t ||  context.parent.$store.state.appInstance.objectActive.actionText): '',
      ]

    );


  }
}
