
export default {
  functional: true,
  props: {
    children: {
      type: Array
    },
    structure: {
      default: function () {
        return {};
      }
    },
    wrapper: {
      type: String
    },

    wrapperclass: {
      type: [Boolean, Array],
      default: false
    }
  },

  render(h, context) {

    return context.props.children.map(function(element){
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

        var el =  h(createdComponent, {
         props: {
           ...element._p,
           $data: element._d||{},
           $children: element._ch
         },
         class: element._c

       })

       if (context.props.wrapper) {
         return h(context.props.wrapper,
           {
             class: context.props.wrapperclass? context.props.wrapperclass: element._p? element._p.pc: ''
           },
           [el]
         );
       } else {
         return el;
       }




    })

  }

}
