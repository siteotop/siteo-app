
export default  {
  functional : true,
  render(h, context) {
    return h('v-toolbar-side-icon',  {
      class: context.data.class,
      on: {
        click: ()=>context.parent.$store.state.drawer=!context.parent.$store.state.drawer
      }
    }
    )
  }
}
