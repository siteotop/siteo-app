/**
  Button for all actions on Siteo
  Default PAc go to order  /go/order
  when sombody click to action we call  statistic event
*/
export default {
  functional: true,
  render(h, context) {

    if (!context.props.cntnt){
      context.props.cntnt = {};
    }
    var cnf = context.props.cnf||{};
    return h('v-btn',
      {
        props: {
          tag: 'a',
          color: cnf.c||'primary',
          small: cnf.s,
          large: cnf.l,
          absolute: cnf.a,
          block: cnf.b,
          bottom: cnf.t,
          top: cnf.p,
          left: cnf.e,
          right: cnf.r,
          icon: cnf.i,
          dark: cnf.d,
          light: cnf.g,
          depressed:  cnf.y,
          exact: cnf.x,
          fab: cnf.f,
          fixed: cnf.j,
          flat: cnf.v,
          outline: cnf.u,
          round: cnf.m,
          target: cnf.w?'_blank':cnf.w,
          to: context.props.cntnt.r,
          href: context.props.cntnt.h,

        },
        attrs: {
          rel: cnf.q,
        },
        class: context.data.class,
        on: {
          click: function (event) {
             if (context.listeners&&context.listeners.click) {
               context.listeners.click(event);
             }
            console.log(' here send statistic');
          }
        }
      },

      [
        context.props.cntnt.i? h('AppIcon', {attrs: {name:context.props.cntnt.i}}):'',
        (!cnf.f)? (context.props.cntnt.t ||  context.parent.$store.state.appInstance.objectActive.actionText): '',
      ]

    );


  }
}