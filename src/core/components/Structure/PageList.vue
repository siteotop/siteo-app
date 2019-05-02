<script>

const tileStructure = {
  // avatar
  LAv: {
    functional:true,
    render(h, context) {
       return h('v-list-tile-avatar', [
         h('img', {attrs: {src:context.props.cntnt.i }})
       ])
    }
  },
  // content
  LCt: {
    functional:true,
    render(h, context) {
       return h('v-list-tile-content', [
         h('v-list-tile-title', [context.props.cntnt.t]),
         h('v-list-tile-sub-title', [context.props.cntnt.d]),

       ])
    }
  },

  LAc: {
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
    var cnf = context.props.cnf;
    return h('v-list', {props: {
      dense: cnf.d,
      subheader: cnf.s,
      threeLine: cnf.t,
      twoLine: cnf.w,
      light:cnf.l,
      dark: cnf.a,
    }, class: context.data.class}, [
        (context.props.chldrn||[]).map(function(element){
          var el_c = element._p||{};
          return h('v-list-tile', {props: {
            tag:'li',
            avatar: el_c.a,
            color: el_c.c
          }, class:element._c} , [
            (element._ch||[]).map(function(tileElement){
               return h('StChildrenHelper', {props: {element:tileElement, structure: tileStructure}})
            })
          ])
        })
    ])

  }
}

</script>
