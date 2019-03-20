/**
  Button for all actions on Siteo
  Default StAction go to order  /go/order
  when sombody click to action we call  statistic event
*/
import helperCreateStDesign from './_helper/createStDesign.js';


export default {


  functional: true,
  //name: 'StAction',

  render(h, context) {
    if (context.props.small  ) {
      context.props.large = false;
    }
    if (context.props.href) {
        //console.log(context);
      context.props.to = '';
    }
    return helperCreateStDesign(h, context,
      'StAction',
      'v-btn',
      {
        color: 'secondary',
        light:true,
        large: true,
        to: {name: 'order', params: {typeAction: 'order'}}
      },
      {
        click: function (event) {
          console.log(context);
             if (context.listeners&&context.listeners.click) {
               context.listeners.click();
             }
            console.log(' here send statistic');
        },
      },
      [
        h('AppIcon', {attrs: {name:context.props.siicon||'si-order'}}),
        (!context.props.fab)? (context.props._at || context.parent.$store.state.appInstance.objectActive.actionText): '',
      ]
    );

  }
}
