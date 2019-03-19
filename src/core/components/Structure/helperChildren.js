
import * as StructureBlocks from './';


export default function (h, children) {
  if (typeof(children)==='undefined') {
    return '';
  }
  return children.map(function(element){
      if (typeof(element) =='string') {
          if (StructureBlocks[element]) {
            return h(StructureBlocks[element]);
          } else {
            return h(element);
          }
      }
      return h(  StructureBlocks[element.name]||element.name, {
       props: element.props,
       class: element.class

      });

  })
}
