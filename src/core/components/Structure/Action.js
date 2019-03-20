
export default {

  
  functional: true,

  props: {

  },

  render(h, context) {
        var mobile = context.parent.$root.mobile;
        if (mobile)  {
            return h('StAction', {props: {fab: true, large:false, small: true}});
        } else {
            return h('StAction', { props: {large:false}});
        }


  }
}
