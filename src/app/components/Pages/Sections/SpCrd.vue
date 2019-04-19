<script>

const cardStructure = {
  // v-card-title
  Cti: {
    functional: true,
    render(h, context) {
       return h('v-card-title', {class: context.data.class} ,  [
         (context.props.chldrn||[]).map(function(element){
           return h('StChildrenHelper', {props: {element:element}})
         })
       ])
    }
  },

 // v-card-text
  Cte: {
    functional: true,
    render(h, context) {
       return h('v-card-text',  {class: context.data.class} , [
         (context.props.chldrn||[]).map(function(element){
           return h('StChildrenHelper', {props: {element:element}})
         })
       ])
    }
  },

  Cac: {
    functional: true,
    render(h, context) {
       return h('v-card-actions',  {class: context.data.class} , [
         (context.props.chldrn||[]).map(function(element){
           return h('StChildrenHelper', {props: {element:element}})
         })
       ])
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
