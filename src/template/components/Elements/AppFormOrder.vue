<script>
export default {
  functional: true,
  name: 'AppFormOrder',

  render(h, context) {
      var structure =  context.parent.$store.state.APP_INSTANCE.design.AppFormOrder;
      return h('AppForm', {props: {propsStructure: {}, i18nkey: "formOrder" }})

  }

}

</script>
