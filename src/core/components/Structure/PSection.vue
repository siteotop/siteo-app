<script>
/*short code PSc*/

export default {
  functional: true,
  render(h, context) {

    var children = (context.props.chldrn||[]).map(function(element) {
        return h('StChildrenHelper', {props: {element:element }})
    });

    // is fluid
    var nameComponent = context.props.cnf.c? 'v-container': 'section';


    return h(nameComponent, {
        class: context.props.cnf.b||'',
        attrs: {
          fluid: '',
          ...context.data.attrs
        },


      },

      [
          context.props.cnf.c? children : h('v-container', {
            style:{height:context.props.cnf.h? context.props.cnf.h+'px': undefined}  

          }, children)
      ]

    )
  }
}
</script>
