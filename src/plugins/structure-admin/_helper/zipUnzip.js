
import _isEmpty from 'lodash/isEmpty';




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

        if (_isEmpty(settForComponent)) {
           delete  structure[index];
        }
    }

    return structure;
}


export const unzipObjectBeforeUpate = function (Object) {


}
