
export {default as  AppDrawerMenu } from './AppDrawerMenu.vue';

export const  AppDrawerHeader = {
    functional: true,

    render(h, context) {
      return h('v-toolbar', {props: {flat:true}},
        [
          h('v-toolbar-title', [context.parent.$store.state.appInstance.data.name ]),

        ]
      )
    }
}
