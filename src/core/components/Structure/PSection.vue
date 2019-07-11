<script>
export default {
  functional: true,
  render(h, context) {
    return h('v-container', {
        props: {
          //fluid: true,
          tag: "section"
        },
        class: 'pa-0 ' + (context.props.cnf.b||''),
        attrs: {
          fluid: '',
          ...context.data.attrs
        }
      },
      (context.props.chldrn||[]).map(function(element) {
          return h('StChildrenHelper', {props: {element:element }})
      })
    )
  }
}
</script>
