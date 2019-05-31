

export default {
  functional: true,
  render (h, context){
      
      return h('PBt', {props: {
        cnf: context.props.cnf,
        cntnt: context.props.cntnt
      }});

  }
}
