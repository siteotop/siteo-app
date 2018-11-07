
export default {
  functional: true,
  name: 'BFormEmail',
  props: ['formAction'],
  render(h, context) {
    return  h('AppForm', {
      props: {
        i18nkey: 'formEmail',
        formAction: context.props.formAction || 'makeSubscribe',
        propsStructure: ['name', 'email'],
        typeInput: 'outline'
      }
    })
  }

}
