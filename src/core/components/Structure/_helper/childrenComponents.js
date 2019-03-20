
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
      var createdComponent = StructureBlocks[element._n]||element._n;
      //console.log(element)
      return !element._ch?
         h(createdComponent , {
          props: element._p,
          class: element._c

        })
      :  h(createdComponent, {
          props: {...element._p||{}, ...{parentDesign:{_ch:element._ch}}},
          class: element._c

        })

  })
}
