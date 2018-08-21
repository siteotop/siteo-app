
export default {


  functional: true,
  name: 'AppAction',
  render(h, context) {
    var mobile = context.parent.$root.$vuetify.breakpoint.xs,
    design = context.parent.$store.state.instance.design.AppAction||{},
    actionText = context.parent.$store.state.instance.website.actionText;


    //context.data.props.icon = mobile;
    //console.log(context);
    return   h('v-btn', {
      props: design.props,
      class: design.class
    },
      [
        h('AppIcon', {attrs: {name:'cart-plus'}}),
          !mobile? actionText: '',
      ]
   )

  }
}
