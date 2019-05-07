

export default {
  functional: true,
  render (h, context){
      if (!context.props.cnf.c)  context.props.cnf.c ='secondary';
      return h('RBt', {props: {
        cnf: context.props.cnf,
        cntnt: context.props.cntnt
      }});

  }
}
