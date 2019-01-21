
export default {

  name: 'AppToolbarAction',

  functional: true,

  props: {

  },

  render(h, context) {
        var mobile = context.parent.$root.mobile;
        if (mobile)  {
            return h('AppAction', {props: {fab: true, large:false, small: true}});
        } else {
            return h('AppAction', { props: {large:false}});
        }


  }
}
