
import * as StructureBlocks from '../';


export default function (h, children) {
  return children.map(function(element){
      if (typeof(element) =='string') {
          if (StructureBlocks[element]) {
            return h(StructureBlocks[element]);
          } else {
            return h(element);
          }
      }
      return h(  StructureBlocks[element._n]||element._n, {
       props: element._p,
       class: element._c

      });

  })
}
