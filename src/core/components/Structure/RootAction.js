

export default {
  functional: true,
  render (h, context){
      return h('PAc', {props: {
        cnf: context.props.cnf,
        cntnt: context.props.cntnt
      }});

  }
}
