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
        h('v-icon', [context.props.cntnt.i] ),
      ])
    }
  }
  //action

}

export default {
  functional: true,
  render(h, context) {
    var cnf = context.props.cnf;
    var data = context.props.cntnt;
    // if data auto menu drawer not exist
    if (!data.a)  {
    var children =   (context.props.chldrn||[]).map(function(element){
        var el_c = element.p/*_props*/||{};
        return h('v-list-item', {props: {
          tag:'li',
          avatar: el_c.a,
          color: el_c.c
        }, class:element.c/*_class*/} ,
          h('StChildrenHelper', {
            props: {
              element:element.h,
              list:true,
              structure: tileStructure
          }})

        )
      });
    } else {
      var children =  (context.parent.$store.state.appInstance.objectActive.menus||[]).map(function(element){
          let pr = {
            tag:'li',
          };
          if (element.ext) {
            pr.href=element.link;
          } else {
            pr.to = element.link;
          }
          return  element.p_nav==1?  h('v-list-item', {props:pr} , [
             h('v-list-item-content', [ h('v-list-item-title', [element.anchor])  ])
          ]): '';
        });

    }
    return !cnf.n?
     h('v-list', {props: {

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
        children
    ]): children

  }
}

</script>
