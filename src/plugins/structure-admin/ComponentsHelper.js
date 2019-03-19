import {createSettComponent} from './designDefault';
import * as  AppStructure from '../../core/components/Structure';
;



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
      return 'no-component';
    }

}

var connectSpecial = function(componentName, props, componentProps) {
  for (var nameProp in componentProps) {
      props[nameProp] = componentProps[nameProp];
  }
}


export default function (Vue) {
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
