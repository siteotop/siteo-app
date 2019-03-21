
import * as  AppStructure from '../../../core/components/Structure';
import {allowChildrenList} from '../validator/allowChildren';


var getComponent = function (componentName) {
    if (AppStructure[componentName]) {
       return AppStructure[componentName];
    } else {
      return false;
    }
}


var isChildren = function (componentName){
  return  ( allowChildrenList[componentName]&&allowChildrenList[componentName]._ch)
}

export const  createSettComponent = function (componentName) {
   var settings = {};
   if (isChildren(componentName)) {
      //children
      settings._ch = [];
   }

   settings._n = componentName;
   settings._p = {};
   settings._c = [];
   return settings;
}


export const updateSettComponent = function (issetStrucutre, componentName) {

   var componentObject = getComponent(componentName);
   if (!componentObject) {
     issetStrucutre._n = componentName;
     return issetStrucutre;
   }

   var settings = {};
   if (isChildren(componentName)) {
      //children
      if (!issetStrucutre._ch) {
        settings._ch = [];
      } else {
        settings._ch = issetStrucutre._ch;
      }
   }
    settings._n = issetStrucutre._n||componentName,
    settings._p = issetStrucutre._p||{},
    settings._c = issetStrucutre._c||[]
    return settings;
}


export const helperComponents =  function (Vue) {



   return {
      createSettComponent: createSettComponent,

      /**
        get allowed children list for component
      */
      getChildrenList: function (parentName) {
          if (!parentName) {
            parentName = 'root';
          }
          if (isChildren(parentName)) {
              var allowStructure = {};
              //allowChildrenList[parentName]._ch.sort();
              allowChildrenList[parentName]._ch.map(function(nameComponent){
                  allowStructure[nameComponent] = AppStructure[nameComponent];
              });

            return allowStructure;
          } else {
            return false;
          }
      },


      getComponent: getComponent,

      generateProps(componentName) {
         var props;//  component = getComponent(componentName);

          if ( allowChildrenList[componentName]&&allowChildrenList[componentName]._p) {
            props = allowChildrenList[componentName]._p;

          }

        /*  if (component.wrapped) {
             // component Wrapped must be in "CamelCase" naming
             var wrappedComponent =  Vue.component('VToolbar');
             console.log(wrappedComponent);
             var instanceComponent = new wrappedComponent();
             connectSpecial(componentName, props, instanceComponent.$options.props);

          }
          */
        return props;

      }
    }
}
