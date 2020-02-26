<script>
/*short code PCt*/

export default {
  functional: true,
  render(h, context) {

    return h('v-container', {
        props: {
            fluid: context.props.cnf.a,
            tag: context.props.cnf.b
        },
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
