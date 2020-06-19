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
      h('StChildrenHelper', {
        props: {
          element:context.props.chldrn,
          list:true
      }})


    )
  }
}
</script>
