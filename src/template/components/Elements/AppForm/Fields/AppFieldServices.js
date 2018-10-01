export default {

  functional: true,

  render(h, context) {

    var items = context.parent.$store.state.APP_SERVICES.items.objects.map(function(element) {
      return {value: element._id, text:element.title+ ' - '+ element.price };
    });
    console.log(items);
    return h('v-select',  {
      props: { items: items, multiple: true,chips:true, deletableChips: true,   ...context.props} ,
      on:context.listeners,
      attrs: {name:context.props.name},
      directives: [
        {
          name: 'validate',
          value: {required: true},
        }
      ]

     });

  }


}
