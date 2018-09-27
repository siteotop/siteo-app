
export default {


  functional: true,
  name: 'AppAction',
  wrapped:'v-btn',
  render(h, context) {
    var

    //  design = context.parent.$store.state.APP_INSTANCE.design.AppAction||{},
    actionText = context.parent.$store.state.APP_INSTANCE.data.actionText;


    //context.data.props.icon = mobile;
    //console.log(context);
    if (context.props.small  ) {
      context.props.large = false;
    }
    return   h('v-btn', {
      props: {color: 'accent', large: true,  ...context.props  }  ,
      class: ['black--text'],
      on: {
        click: function (event) {
           context.parent.$router.push({name: 'order'});
          //  console.log(event);
        }
      }
    },
      [
        h('AppIcon', {attrs: {name:'si-action'}}),

          !context.props.mobile? ' '+ actionText: '',
      ]
   )

  }
}
