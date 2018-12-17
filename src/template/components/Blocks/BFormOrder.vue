<script>

export default {
  functional: true,
  name: 'BFormOrder',
  props: ['formAction'],
  render(h, context) {
      var structure =  context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.children;
      var props =   context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.props||{};
      props.propsStructure = structure;
      props.defaultValues = context.parent.$store.state.APP_INSTANCE.order;
      props.i18nkey = "formOrder";
      props.formAction = context.props.formAction || 'order/createObject';
      return  h('AppForm', {props:  props})
  }

}

</script>
