<script>

const helperContext = function(componentName,h,context) {
  return h(componentName, {class: context.data.class} ,
    h('StChildrenHelper', {
      props: {
        element:context.props.chldrn,
        list:true
    }})
  )
}

const cardStructure = {
  // v-card-title
  Cti: {
    functional: true,
    render(h, context) {
        return helperContext('v-card-title',h, context);
    }
  },

 // v-card-text
  Cte: {
    functional: true,
    render(h, context) {
      return helperContext('v-card-text',h, context);
    }
  },
 // v-card-action
  Cac: {
    functional: true,
    render(h, context) {
      return helperContext('v-card-actions',h, context);
    }
  },


}

export default {
  functional: true,
  render(h, context) {
    var cnf = context.props.cnf;
    return h('v-card', {
      props: {
        color: cnf.c,
        dark: cnf.d,
        light: cnf.l,
        elevation: cnf.e,
        flat: cnf.f,
        height: cnf.h,
        hover: cnf.o,
        img: cnf.i,
        maxHeight: cnf.m,
        maxWidth: cnf.a,
        minHeight: cnf.n,
        minWidth: cnf.w,
        raised: cnf.r,
        tile: cnf.t,
        width: cnf.q,
        outlined: cnf.v,
      }, class: context.data.class},
        h('StChildrenHelper', {
          props: {
            element:context.props.chldrn,
            list:true,
            structure: cardStructure
        }})
      )

  }
}
</script>
