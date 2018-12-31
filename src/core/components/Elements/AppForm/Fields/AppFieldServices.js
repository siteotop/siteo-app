export default {

  functional: true,

  render(h, context) {

    var items = context.parent.$store.state.APP_SERVICES.items.objects.map(function(element) {
      return {value: element._id, text:element.title+ ' - '+ element.price };
    });

    return h('v-select',  {
      props: { items: items, multiple: true, chips:true, deletableChips: true, value: context.props.value ,   ...context.props.vComp} ,
      on:context.listeners,
      attrs: context.data.attrs

     });

  }


}
