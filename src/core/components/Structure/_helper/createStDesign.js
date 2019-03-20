import helperChildren from './childrenComponents.js';

export  default function (h, context, nameStDesign, nameComponent, startProps, events, childrenAfter ){
    var design;
    if (typeof nameStDesign == 'string') {
       design = context.parent.$store.state.appInstance.objectActive.design[nameStDesign] || {};
       /*if (design._p&& design._p.coreOff===true) {
         return '';
       }*/
    } else {
      design = nameStDesign||{};
    }


    var children = [];
    if (design._ch) {
       children = helperChildren(h, design._ch);
    }

    if (childrenAfter) {
      children.push(childrenAfter);
    }

    return h(nameComponent, {
        props: {
          ...startProps,
          ...design._p,
          ...context.props
        },
        class: design._c,
        on: events
    },
    children

  );

}
