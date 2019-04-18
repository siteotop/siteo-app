<script>

const tileStructure = {
  // avatar
  LsA: {
    functional:true,
    render(h, context) {
       return h('v-list-tile-avatar', [
         h('img', {attrs: {src:context.props.cntnt.i }})
       ])
    }
  },
  // content
  LsC: {
    functional:true,
    render(h, context) {
       return h('v-list-tile-content', [
         h('v-list-tile-title', [context.props.cntnt.t]),
         h('v-list-tile-sub-title', [context.props.cntnt.d]),

       ])
    }
  },

  LsI: {
    functional: true,
    render(h, context) {
      return h('v-list-tile-action', [
        h('AppIcon', {props: {name: context.props.cntnt.i }} ),
      ])
    }
  }
  //action

}

export default {
  functional: true,
  render(h, context) {
    
    return h('v-list', {props: context.props.cnf||{}, class: context.data.class}, [
        (context.props.chldrn||[]).map(function(element){
          return h('v-list-tile', {props: {tag:'li', ...(element._p||{})}, class:element._c}, [
            (element._ch||[]).map(function(tileElement){
               return h('StChildrenHelper', {props: {element:tileElement, structure: tileStructure}})
            })
          ])
        })
    ])

  }
}

</script>
