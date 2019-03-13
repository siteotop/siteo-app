
export default {
  name: 'AppToolbarLogoIcon',
  functional: true,
  wrapped: 'VAvatar',

  render(h, context) {

      var website = context.parent.$store.state.appInstance.objectActive.data|| {};

      if (!website.src&&!website.name ) {
        return '';
      }
      return h('router-link', {props: {to:{name: 'indexPage'}}, class: context.data.class },
      [h('v-avatar', {props: context.props, }, [
           website.src?
            h('img', {attrs: {src: website.src, alt:website.name}}):
            h('span', [website.name[0]])
      ])]);
    }
}
