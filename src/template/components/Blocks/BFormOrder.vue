<script>

export default {
  functional: true,
  name: 'BFormOrder',
  props: ['formAction'],
  render(h, context) {
      var structure =  context.parent.$store.state.appInstance.objectActive.design.AppFormOrder.children;
      var props =   context.parent.$store.state.appInstance.objectActive.design.AppFormOrder.props||{};
      props.propsStructure = structure;
      props.defaultValues = context.parent.$store.state.APP_ORDER;
      props.i18nkey = "formOrder";
      props.formAction = context.props.formAction || 'APP_ORDER/createObject';



      return  h('StPlugin', {props: {pluginName: 'siteo-plugin-forms', pluginOptions: props } })
  }

}

</script>
