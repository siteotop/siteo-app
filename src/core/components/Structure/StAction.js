/**
  Button for all actions on Siteo
  Default StAction go to order  /go/order
  when sombody click to action we call  statistic event
*/
import helperCreateStDesign from './_helper/createStDesign.js';
export default {
  functional: true,
  render(h, context) {
    if (context.props.href) {
      context.props.to = '';
    }
    return helperCreateStDesign(h, context,
      'StAction',
      'v-btn',
      {
        tag: 'a',
        color: 'secondary',
        to: {name: 'order', params: {typeAction: 'order'} }
      },
      {
        click: function (event) {
             if (context.listeners&&context.listeners.click) {
               context.listeners.click();
             }
            console.log(' here send statistic');
        },
      },
      [
        h('AppIcon', {attrs: {name:context.props.siicon||'si-order'}}),
        (!context.props.fab)? (context.props.$data.t || context.parent.$store.state.appInstance.objectActive.actionText): '',
      ]
    );

  }
}
