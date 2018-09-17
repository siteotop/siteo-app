
export default {


  functional: true,
  name: 'AppAction',
  wrapped:'v-btn',
  render(h, context) {
    var mobile = context.parent.$root.$vuetify.breakpoint.xs,
    design = context.parent.$store.state.APP_INSTANCE.design.AppAction||{},
    actionText = context.parent.$store.state.APP_INSTANCE.data.actionText;


    //context.data.props.icon = mobile;
    //console.log(context);
    return   h('v-btn', {
      props: design.props,
      class: design.class,
      on: {
        click: function (event) {
           context.parent.$router.push({name: 'order'});
          //  console.log(event);
        }
      }
    },
      [
        h('AppIcon', {attrs: {name:'cart-plus'}}),
          !mobile? actionText: '',
      ]
   )

  }
}
