<script>
import * as SectionsBlocks from './Sections/index.js';
export default {
  functional: true,

  render(h, context) {

     return h('v-container',
      {
        props: {
          tag: 'section'
        },
        attrs: {
          fluid: true,
        },
        class: context.data.class
      },

      [
        h('StChildrenHelper', {props: {children: context.props.$children||[], structure: SectionsBlocks }}),

      ]

     )
  }

}


</script>
