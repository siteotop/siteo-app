/*const langMenu =  function (h, parent) {
    return h('v-menu', {props: {left: true}}, [
        h('v-btn', {
            props: {
                icon: true
            },
            slot: 'activator'
        }, [
            parent.$store.getters.LANG_PORTAL.toUpperCase()
        ]),

        h('v-list',
          parent.$store.getters.LIST_LANG.map(function (li){
              return h('v-list-item', {attrs: {href: li.d}},  [
                h('v-list-item-title', [li.n])
              ])
          })
        )
    ])
};


*/
