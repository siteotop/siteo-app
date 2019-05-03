<script>

import {ToolbarElements} from './RootAppBar.vue';

/**
others toolbar
*/
export default {
  functional: true,

  render(h, context) {
    var cnf = context.props.cnf;

    return h('v-toolbar', {
      props: {
          height: cnf.h,
          dark:cnf.d,
          dense: cnf.e,
          color: cnf.c
        }
    }, [
      (context.props.chldrn||[]).map(function(element){
        return h('StChildrenHelper', {props: {element:element, structure: ToolbarElements}})
      })
    ]);

  }
}

</script>
