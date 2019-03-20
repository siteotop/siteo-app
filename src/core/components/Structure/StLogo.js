
export default {
  name: 'StLogo',
  functional: true,
  wrapped: 'VAvatar',

  render(h, context) {

      var website = context.parent.$store.state.appInstance.objectActive|| {};

      return h('v-avatar', {
        props: {...{color: 'primary lighten-2', size: 38},  ...context.props},
        style: {
          cursor: 'pointer'
        },
        on: {
          click: ()=>{
            context.parent.$router.push({name: 'indexPage'})
          }
        }

       },
       [
          website.src?
            h('img', {attrs: {src: website.src, alt:website.name}}):
            h('span', [website.name[0]])
      ])

    }
}
