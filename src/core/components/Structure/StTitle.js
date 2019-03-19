
export default {
  functional: true,
  name: 'StTitle',
  render(h, context) {
   return   h('v-toolbar-title',
      {
        class:context.data.class
      },
      [
        context.parent.$store.state.appInstance.objectActive.name
      ]
    )
  }
}
