<script>

export default {
  functional: true,
  name: 'AppFormRecall',
  props: ['formAction'],
  render(h, context) {
    return  h('AppForm', {
      props: {
        i18nkey: 'formRecall',
        formAction: context.props.formAction || 'makeOrder',
        propsStructure: ['services', 'name', 'phone']
      }
    })
  }

}

</script>
