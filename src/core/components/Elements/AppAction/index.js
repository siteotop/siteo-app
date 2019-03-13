/**
  Button for all actions on Siteo
  Default AppAction go to order  /go/order
  when sombody click to action we call  statistic event
*/

export default {


  functional: true,
  name: 'AppAction',

  render(h, context) {
    var
      design = context.parent.$store.state.appInstance.objectActive.design.AppAction||{};



    //context.data.props.icon = mobile;
    //console.log(context);
    if (context.props.small  ) {
      context.props.large = false;
    }
    if (context.props.href) {
        //console.log(context);
      context.props.to = '';
    }

    return   h('v-btn', {
      props: {
        color: 'accent',
        light:true,
        large: true,
        to: {name: 'order', params: {typeAction: 'order'}},
        ...design,
        ...context.props },
      attrs: context.data.attrs,
      on: {
        click: function (event) {
          console.log(context);
             if (context.listeners&&context.listeners.click) {
               context.listeners.click();
             }
            console.log(' here send statistic');
        },

        //...context.listeners

      }
    },
      [
        h('AppIcon', {attrs: {name:context.props.siicon||'si-order'}}),

          (!context.props.fab)? (context.props._at || context.parent.$store.state.appInstance.objectActive.actionText): '',
      ]
   )

  }
}
