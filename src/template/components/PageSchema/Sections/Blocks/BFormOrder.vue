<script>

export default {
  functional: true,
  name: 'BFormOrder',
  props: ['formAction'],
  render(h, context) {
      var structure =  context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.children;
      var props =   context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.props||{};
      props.propsStructure = structure;
      props.i18nkey = "formOrder";
      props.formAction = context.props.formAction || 'makeOrder';
      return  h('AppForm', {props:  props})
  }

}

</script>
