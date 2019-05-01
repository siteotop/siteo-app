
<script>

const tlbr = {
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
       return h('v-toolbar-side-icon',  {
         class: context.data.class,
         on: {
           click: ()=>context.parent.$store.state.drawer=!context.parent.$store.state.drawer
         }
       }
       )
     }
  }



}


/**
Main App toolbar
Top Bar Menu in APP, where is logo, site name, and top menu
*/

export default {
  functional: true,

  render(h, context) {
    var cnf = context.props.cnf;

    return h('v-toolbar', {
      props: {
          app: true,
          height: cnf.h,
          dark:cnf.d,
          clippedLeft: cnf.l,
          clippedRight: cnf.r,
          dense: cnf.e,
          color: cnf.c||'primary'
        }
    }, [
      (context.props.chldrn||[]).map(function(element){
        return h('StChildrenHelper', {props: {element:element, structure: tlbr}})
      })
    ]);

  }
}

</script>
