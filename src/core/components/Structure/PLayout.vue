
<script>
export default {
  functional: true,
  render(h, context) {

     var cnf = context.props.cnf||{};
     var layout =  h('v-row', {
         props: {
           align: cnf.a,
           alignSm: cnf.b,
           alignMd: cnf.e,
           alignLg: cnf.f,
           alignXl: cnf.g,
           alignContent: cnf.h,
           alignContentSm: cnf.i,
           alignContentMd: cnf.j,
           alignContentLg: cnf.k,
           alignContentXl: cnf.l,
           justify: cnf.m,
           justifySm: cnf.n,
           justifyMd: cnf.o,
           justifyLg: cnf.p,
           justifyXl: cnf.q,
           dense: cnf.r,
           noGutters: cnf.s

         },
         class: context.data.class
      }, [
        (context.props.chldrn||[]).map(function(element) {
            var comp = context.props.cnf.ft||'v-col';

            if (element.n!='Flx') {
                return h(comp, {
                  class: context.props.cnf.fc
                },
                [
                  h('StChildrenHelper', {
                    props: {
                      element: element
                    }
                  })
                ]
              )
            } else {
              var props = element.p||{};
              return h(comp, {
                props: {
                  cols: props.a,
                  sm: props.b,
                  md: props.c,
                  lg: props.d,
                  xl: props.e,
                  offset: props.f,
                  offsetSm: props.g,
                  offsetMd: props.h,
                  offsetLg: props.i,
                  offsetXl: props.j,
                  order: props.k,
                  ordertSm: props.l,
                  ordertMd: props.m,
                  ordertLg: props.n,
                  ordertXl: props.o,
                  alignSelf: props.p,

                },
                class: element.c
              }, [
                  (element.h||[]).map(function(columnChild, index){
                     return h('StChildrenHelper', {
                       props: {
                         element: columnChild
                       }
                     })
                  })
              ]);

            }


        })
      ])
      if (context.props.cnf.c) {
        return h('v-container', {
          class: context.props.cnf.d
        } , [layout]);
      } else {
          return layout;
      }


  }
}
</script>
