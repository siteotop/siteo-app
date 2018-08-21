
export default {
  name: 'AppToolbarLogoIcon',
  functional: true,
  wrapped: 'v-avatar',

  render(h, context) {

      var website = context.parent.$store.state.instance.website|| {};

      if (!website.src&&!website.name ) {
        return '';
      }
      return h('router-link', {props: {to:{name: 'indexPage'}} },  [h('v-avatar', {props: context.props, class: context.data.class}, [
           website.src?
            h('img', {attrs: {src: website.src, alt:website.name}}):
            h('span', [website.name[0]])
      ])]);
    }
}
