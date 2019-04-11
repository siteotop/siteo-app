export default {
  functional: true,

  render(h, context) {
     return h('v-img',
     {
       props: {
         height:context.props.h||'100%',
         src: context.props.i,
         gradient: context.props.gr||'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)'
       },
       attrs: {
         fluid: true,
       },
       class:context.props.cc

     },
     [

      h('StChildrenHelper', {props: {children: context.props.$children||[], structure: {} }}),

     ]

     )
  }

}
