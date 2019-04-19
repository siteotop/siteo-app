<script>

const helperContext = function(componentName,h,context) {
  return h(componentName, {class: context.data.class} ,  [
    (context.props.chldrn||[]).map(function(element){
      return h('StChildrenHelper', {props: {element:element}})
    })
  ])
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

    return h('v-card', {props: context.props.cnf||{}, class: context.data.class}, [
        (context.props.chldrn||[]).map(function(element){
          return h('StChildrenHelper', {props: {element:element, structure: cardStructure}})
        })
    ])

  }
}
</script>
