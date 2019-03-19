
import * as  AppStructure from '../../../core/components/Structure';


const AllowChildrenList = {

    'StToolbar': [],
    'StContent': [],
    'StDrawer': [],
    'StFooter': [],


};



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


export const  createSettComponent = function (componentName,   ) {
   var componentObject = getComponent(componentName);
   var settings = {
     //name
    _n: componentName,
    //props
    _p: {},
    //class
    _c: []
  };

  if (componentObject.children) {
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

   if (componentObject.children) {
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

          //for ()
          return AppStructure;
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
