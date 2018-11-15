
export default {
//  props: ['to', 'color', 'iconname'],

  name: 'AppVBtnMobile',

  functional: true,

  render(h, context) {
    var mobile = context.parent.$root.$vuetify.breakpoint.xs;
    context.data.props.icon = mobile;
    //console.log(context);
    return   h('v-btn', context.data,
      [

        h('AppIcon', {attrs: {name:context.props.iconname}}),
        !mobile? context.children: '',
      ]
  )


  }
}
