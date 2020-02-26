

<script>

/**
*/

const TableElements = {


}

export default {




  functional: true,
  render(h, context) {

      let cnf = context.props.cnf;
      let tbody = [], thead = [];
      let chldrn = (context.props.chldrn||[]).map(function (element, index) {
        let tr = h('tr', (element.h/*_children*/||[]).map(function(el, index) {
          return h('td',{ class:el.c/*_class*/ } ,  [el.d/*_data*/? el.d.a/*_data*/: ''])
        }));
        if (index ===0) {
          thead.push(tr)
        } else {
          tbody.push(tr)
        }
      })


      return h('v-simple-table', {
        props: {
          dark: cnf.a,
          light: cnf.b,
          dense: cnf.c,
          height: cnf.d,
          fixedHeader: cnf.e,
        }
      }, [
          h('thead', thead),
          h('tbody', tbody),

      ])

  }
}
</script>
