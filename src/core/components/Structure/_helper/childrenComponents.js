
export default {
  functional: true,
  props: {
    element: {

    },
    structure: {
      default: function () {
        return {};
      }
    }

  },

  render(h, context) {
    var element = context.props.element;
    var createdComponent;
    if (typeof(element) =='string') {
      if (context.props.structure[element]) {
        createdComponent = context.props.structure[element];
      } else {
          createdComponent = element;
      }
    } else {
       createdComponent = context.props.structure[element._n]||element._n;
    }

    return   h(createdComponent, {
     props: {
       ...element._p,
       $data: element._d||{},
       $children: element._ch
     },
     class: element._c

   })

  }

}
