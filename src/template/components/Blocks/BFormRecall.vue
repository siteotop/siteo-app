<script>

export default {
  functional: true,
  name: 'BFormRecall',
  props: ['formAction'],
  render(h, context) {
    return  h('AppForm', {
      props: {
        i18nkey: 'formRecall',
        defaultValues: context.parent.$store.state.APP_ORDER,
        formAction: context.props.formAction || 'APP_ORDER/createObject',
        propsStructure: ['services', 'name', 'phone']
      }
    })
  }

}

</script>
