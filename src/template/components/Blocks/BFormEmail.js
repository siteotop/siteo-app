
export default {
  functional: true,
  name: 'BFormEmail',
  props: ['formAction'],
  render(h, context) {
    return  h('AppForm', {
      props: {
        i18nkey: 'formEmail',
        defaultValues: context.parent.$store.state.APP_INSTANCE.order,
        formAction: context.props.formAction || 'makeSubscribe',
        propsStructure: ['name', 'email'],
        typeInput: 'outline'
      }
    })
  }

}
