
export default {
  functional: true,
  name: 'AppToolbarTitle',
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
