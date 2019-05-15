<script>

const tileStructure = {
  // avatar
  LAv: {
    functional:true,
    render(h, context) {
       return h('v-list-item-avatar', [
         h('img', {attrs: {src:context.props.cntnt.i }})
       ])
    }
  },
  // content
  LCt: {
    functional:true,
    render(h, context) {
       return h('v-list-item-content', [
         h('v-list-item-title', [context.props.cntnt.t]),
         h('v-list-item-subtitle', [context.props.cntnt.d]),

       ])
    }
  },

  LAc: {
    functional: true,
    render(h, context) {
      return h('v-list-item-action', [
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

      color: cnf.b,
      dense: cnf.d,
      subheader: cnf.s,
      threeLine: cnf.t,
      twoLine: cnf.w,
      light:cnf.l,
      dark: cnf.a,
      elevation: cnf.c,
      height: cnf.e,
      rounded: cnf.f,
      shaped: cnf.g,
      tile: cnf.h,
      width: cnf.i

    }, class: context.data.class}, [
        (context.props.chldrn||[]).map(function(element){
          var el_c = element._p||{};
          return h('v-list-item', {props: {
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
