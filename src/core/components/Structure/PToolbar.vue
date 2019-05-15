<script>


export const ToolbarElements = {
   TTl: {
     functional: true,
     render(h, context) {
      return   h('v-toolbar-title',
         {
           class:context.data.class
         },
         [
           context.parent.$store.state.appInstance.objectActive.name
         ]
       )
     }
   },

   TTg: {
     functional : true,
     render(h, context) {
       return h('v-app-bar-nav-icon',  {
         class: context.data.class,
         on: {
           click: ()=>context.parent.$store.state.drawer=!context.parent.$store.state.drawer
         }
       }
       )
     }
  }



}

export const createToolbarProps = function (cnf) {
    return {
        height: cnf.h,
        dark:cnf.d,
        dense: cnf.e,
        color: cnf.c,
        collapse: cnf.a,
        elevation: cnf.b,
        flat: cnf.f,
        floating: cnf.g,
        light: cnf.i,
        prominent: cnf.n,
        short: cnf.r,
        tile:  cnf.o,
        src: cnf.q,
      }
}
/**
others toolbar
*/
export default {
  functional: true,

  render(h, context) {
    var cnf = context.props.cnf;

    return h('v-toolbar', {
      props: createToolbarProps(cnf)
    }, [
      (context.props.chldrn||[]).map(function(element){
        return h('StChildrenHelper', {props: {element:element, structure: ToolbarElements}})
      })
    ]);

  }
}

</script>
