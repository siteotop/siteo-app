
export default function (h, children, StructureChildren) {
  if (typeof(children)==='undefined') {
    return '';
  }
  return children.map(function(element){
      if (typeof(element) =='string') {
          if (StructureChildren[element]) {
            return h(StructureChildren[element]);
          } else {
            return h(element);
          }
      }
      return h(  StructureChildren[element.name]||element.name, {
       props: element.props,
       class: element.class

      });

  })
}
