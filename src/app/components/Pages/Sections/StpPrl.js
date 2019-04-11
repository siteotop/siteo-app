export default {
  functional: true,

  render(h, context) {
     return h('v-parallax',
      {
       props: {
         height:context.props.h,
         src: context.props.i
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
