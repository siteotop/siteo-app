
import _isEmpty from 'lodash/isEmpty';


import {updateSettComponent}  from './components';

/**
  @input @Array  [{
    name: 'propName',
    value: '',
  }]
  @return Object
*/



export const zipObjectBeforeSave = function (structure, removeName) {

    for (var index in structure) {
        var settForComponent = structure[index ];

        for (var property in settForComponent ) {
          var valueProperty = settForComponent[property];
          if (property =='_ch') {
              zipObjectBeforeSave(settForComponent[property]);
          }
          if (_isEmpty(settForComponent[property])) {
             delete settForComponent[property];
          }

          if (property=='_n'&&removeName) {
             delete settForComponent[property];
          }
        }

        if (Object.keys(structure[index]).length ==1&&structure[index]._n ) {
          structure[index] = structure[index]._n;
        }

        if (_isEmpty(settForComponent)) {
           delete  structure[index];
        }
    }

    return structure;
}


export const unzipObjectBeforeUpate = function (structure, removedName) {
    for (var index in structure)  {
      if (typeof structure[index] == 'string') {
        structure[index] = {
            _n:structure[index]
        };
      }

      structure[index]= updateSettComponent(
            structure[index],
            removedName?index:structure[index]._n
          );

      if (structure[index]._ch&&structure[index]._ch.length) {
         unzipObjectBeforeUpate(structure[index]._ch)
      }
  }
  return structure;

}
