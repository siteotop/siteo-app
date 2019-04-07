
export default {
  functional: true,

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

        return h(createdComponent , {
         props: {
           ...element._p,
           $data: element._d||{},
           $children: element._ch
         },
         class: element._c

       })


    })

  }

}
