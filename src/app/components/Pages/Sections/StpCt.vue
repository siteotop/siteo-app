<script>
//import * as SectionsBlocks from './Sections/index.js';
export default {
  functional: true,

  render(h, context) {
     return h('v-container',
     {
       props: {
         tag: 'section'
       },
       style: {
         height: context.props.h? context.props.h+'px': undefined
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


</script>
