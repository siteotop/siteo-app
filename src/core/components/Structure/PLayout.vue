
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
         class: context.props.cnf.lc
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
              return h(comp, {
                class: (element.p? element.p.fc:false)||context.props.cnf.fc
              }, [
                  (element.h||[]).map(function(flex, index){
                     return h('StChildrenHelper', {
                       props: {
                         element: flex
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
