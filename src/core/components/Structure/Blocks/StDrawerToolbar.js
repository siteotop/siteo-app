
export default {
    functional: true,

    render(h, context) {
      return h('v-toolbar', {props: {flat:true}},
        [
          h('v-toolbar-title', [context.parent.$store.state.appInstance.objectActive.name ]),
          h('v-spacer'),
          h('v-btn', {
           props: {
            color: 'grey',
            flat: true,
            icon:true,
            outline: true},
           on: {
             click: (ev)=>{ context.parent.$store.state.drawer = false }
           }
          }, [
              h('AppIcon', {props: {name: 'si-arrow-left'}})
            ])
        ]
      )
    }
}
