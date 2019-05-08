

export default {
  functional: true,

  render(h, context) {

    var cnf = context.props.cnf;

    var scopedSlots = {};
    var children = [];

    context.props.chldrn.map(function(element) {
      if (element._n == 'RBt') {
        scopedSlots['activator'] = function (ref) {
          return h('StChildrenHelper', {props: {element:element}, on:ref.on });
        }
      } else {
        children =[  h('StChildrenHelper', {props: {element:element}})];
      }
    })



    return   h('v-menu', {
       props: {
         auto: cnf.a,
         top: cnf.b,
         bottom: cnf.c,
         left: cnf.d,
         right: cnf.e,
         closeOnClick: cnf.f,
         closeOnContentClick: cnf.g,
         disabled: cnf.h,
         fixed: cnf.i,
         fullWidth: cnf.j,
         lazy: cnf.k,
         maxHeight: cnf.l,
         maxWidth: cnf.m,
         openOnClick:  cnf.n,
         openOnHover:  cnf.o,
         transition:  cnf.p,
         offsetX:  cnf.q,
         offsetY:  cnf.r,
         offsetOverflow:  cnf.s
       },
       scopedSlots: scopedSlots

     }, children)


  }

}
