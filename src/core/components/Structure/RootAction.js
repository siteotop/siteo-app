

export default {
  functional: true,
  render (h, context){
      return h('RBt', {props: {
        cnf: context.props.cnf,
        cntnt: context.props.cntnt
      }});

  }
}
