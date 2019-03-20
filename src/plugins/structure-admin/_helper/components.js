
import * as  AppStructure from '../../../core/components/Structure';
import {allowChildrenList} from '../validator/allowChildren';


var getComponent = function (componentName) {
    if (AppStructure[componentName]) {
       return AppStructure[componentName];
    } else {
      return false;
    }
}

var connectSpecial = function(componentName, props, componentProps) {
  for (var nameProp in componentProps) {
      props[nameProp] = componentProps[nameProp];
  }
}


var isChildren = function (componentName){
  return  ( allowChildrenList[componentName]&&allowChildrenList[componentName]._ch)
}

export const  createSettComponent = function (componentName) {

   var settings = {
     //name
    _n: componentName,
    //props
    _p: {},
    //class
    _c: []
  };

  if (isChildren(componentName)) {
     //children
     settings._ch = [];
  }

  return settings;
}


export const updateSettComponent = function (issetStrucutre, componentName) {

   var componentObject = getComponent(componentName);
   if (!componentObject) {
     issetStrucutre._n = componentName;
     return issetStrucutre;
   }

   var settings = {
      _n: issetStrucutre._n||componentName,
      _p: issetStrucutre._p||{},
      _c: issetStrucutre._c||[]
   }

   if (isChildren(componentName)) {
      //children
      if (!issetStrucutre._ch) {
        settings._ch = [];
      } else {
        settings._ch = issetStrucutre._ch;
      }
   }
   return settings;
}


export const helperComponents =  function (Vue) {



   return {
      createSettComponent: createSettComponent,

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
         var props = {},  component = getComponent(componentName);


          if (component.props) {
            connectSpecial(componentName, props, component.props);
          }

          if (component.wrapped) {
             // component Wrapped must be in "CamelCase" naming
             var wrappedComponent =  Vue.component(component.wrapped);
             var instanceComponent = new wrappedComponent();
             connectSpecial(componentName, props, instanceComponent.$options.props);

          }

        return props;

      }
    }
}
