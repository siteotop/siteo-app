/**
  Button for all actions on Siteo
  Default PBt go to order  /go/order
  when sombody click to action we call  statistic event
*/
export default {
  functional: true,
  render(h, context) {

    if (!context.props.cntnt){
      context.props.cntnt = {};
    }
    var cnf = context.props.cnf||{};

    let props = {
      tag: 'a',
      color: cnf.c,
      xSmall: cnf.n,
      small: cnf.s,
      large: cnf.l,
      xLarge:  cnf.z,
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
      text: cnf.v,
      outline: cnf.u,
      rounded: cnf.m,
      width: cnf.ab,
      height: cnf.ac,
      tile: cnf.ad,
      elevation: cnf.ae,
      to: context.props.cntnt.r,
      href: context.props.cntnt.h,
    };

    // Add event click if we add hash on page
    if (context.props.cntnt.hg) {
       props.href= context.props.cntnt.hg;
       var func_click = function(ev){
        ev.preventDefault();
        context.parent.$vuetify.goTo(context.props.cntnt.hg, {offset: 50, duration: 40});
        //document.location.hash = context.props.cntnt.hg;
     };


      if (!context.data.on) {
        context.data.on = {
          click:  func_click
        }
      } else {
        if (context.data.on.click) {
           var new_click =  context.data.on.click;
           context.data.on.click = function (ev) {
             func_click(ev);
             new_click(ev);
           }
        }

      }
    }

    return h('v-btn',
      {
        props: props,
        attrs: {
          rel: cnf.q,
          target: cnf.w?'_blank':cnf.w,
        },
        class: context.data.class,
        on: context.data.on
      },

      [
        context.props.cntnt.i? h('v-icon', [context.props.cntnt.i]):'',
        (!cnf.f&&!cnf.i)? context.props.cntnt.t: '',
      ]

    );


  }
}
