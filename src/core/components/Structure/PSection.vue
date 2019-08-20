<script>
/*short code PSc*/

export default {
  functional: true,
  render(h, context) {

    return h('section', {
        //class: context.props.cnf.b||'',
        attrs: context.data.attrs,
        class: context.data.class
      },

      (context.props.chldrn||[]).map(function(element) {
          return h('StChildrenHelper', {props: {element:element }})
      })

    )
  }
}
</script>
