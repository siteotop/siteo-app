
import * as  AppStructure from '../../core/components/Structure';

export const  createSettComponent = function (componentName,  componentObject ) {

   var settings = {
    name: componentName,
    props: {},
    class: []
  };

  if (componentObject.children) {
     settings.children = [];
  }
  return settings;
}

export const designDefault =  function () {
    var designDefault = {
      theme: {
        name: 'theme',
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          warning: "#FFC107",
          info: "#2196F3",
          success: "#4CAF50"
        }

      }
    };

    for ( let sectionName in AppStructure) {
      designDefault[AppStructure[sectionName].name||sectionName]  =  createSettComponent(sectionName, AppStructure[sectionName])

    }

    return designDefault;


}
